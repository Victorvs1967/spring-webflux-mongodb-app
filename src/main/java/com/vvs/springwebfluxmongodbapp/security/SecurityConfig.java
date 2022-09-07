package com.vvs.springwebfluxmongodbapp.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

import static org.springframework.http.HttpMethod.*;
import static org.springframework.http.HttpStatus.*;

@EnableWebFluxSecurity
@RequiredArgsConstructor
public class SecurityConfig {

  @Autowired
  private SecurityContextRepository securityContextRepository;
  private AuthenticationManager authenticationManager;

  private final static String[] WHITELIST_AUTH_URLS = {"/auth/signup", "/auth/login"};
  
  // Cors
  @Value("${app.host.url}")
  private String hostUrl;

  public CorsConfigurationSource createCorsConfigurationSource() {
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    CorsConfiguration config = new CorsConfiguration();

    config.setAllowCredentials(true);
    config.addAllowedOrigin(hostUrl);
    config.addAllowedHeader("*");
    config.addAllowedMethod("*");
    source.registerCorsConfiguration("/**", config);

    return (org.springframework.web.cors.reactive.CorsConfigurationSource) source;
  }

  @Bean
  public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {
    return http
      .cors().configurationSource(createCorsConfigurationSource()).and()
      .exceptionHandling()
      .authenticationEntryPoint((shs, e) -> Mono.fromRunnable(() -> shs.getResponse().setStatusCode(UNAUTHORIZED)))
      .accessDeniedHandler((shs, e) -> Mono.fromRunnable(() -> shs.getResponse().setStatusCode(FORBIDDEN))).and()
      .csrf().disable()
      .formLogin().disable()
      .authenticationManager(authenticationManager)
      .securityContextRepository(securityContextRepository)
      .authorizeExchange()
      .pathMatchers(OPTIONS).permitAll()
      .pathMatchers(WHITELIST_AUTH_URLS).permitAll()
      .anyExchange().permitAll().and()
      // .anyExchange().authenticated().and()
      .build();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

}
