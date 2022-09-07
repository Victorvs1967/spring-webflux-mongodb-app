package com.vvs.springwebfluxmongodbapp.router;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.vvs.springwebfluxmongodbapp.handle.AuthHandler;

import static org.springframework.web.reactive.function.server.RequestPredicates.*;

@Configuration
public class AuthRouter {
  
  @Bean
  public RouterFunction<ServerResponse> authRouterFunction(AuthHandler handler) {
    return RouterFunctions.route()
      .nest(path("/auth"), builder -> builder
        .POST("/signup", handler::signUp)
        .POST("/login", handler::login))
      .build();
  }
}
