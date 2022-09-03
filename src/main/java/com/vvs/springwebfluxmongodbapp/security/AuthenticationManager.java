package com.vvs.springwebfluxmongodbapp.security;

import org.springframework.security.authentication.ReactiveAuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import com.vvs.springwebfluxmongodbapp.utils.JwtUtils;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

import static com.vvs.springwebfluxmongodbapp.utils.JwtUtils.KEY_ROLE;

import java.util.Collections;

@Component
@RequiredArgsConstructor
public class AuthenticationManager implements ReactiveAuthenticationManager {

  private JwtUtils jwtUtils;
  
  @Override
  public Mono<Authentication> authenticate(Authentication authentication) {
    String authToken = authentication.getAuthorities().toString();

    return Mono.just(authToken)
      .map(token -> jwtUtils.validateToken(token))
      .flatMap(isValid -> jwtUtils.getAllClaimsFromToken(authToken))
      .map(claims -> new UsernamePasswordAuthenticationToken(claims.getSubject(), null, Collections.singletonList(new SimpleGrantedAuthority(claims.get(KEY_ROLE).toString()))));
  }
  
}
