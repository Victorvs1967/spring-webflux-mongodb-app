package com.vvs.springwebfluxmongodbapp.router;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.vvs.springwebfluxmongodbapp.handle.UserHandler;

import static org.springframework.web.reactive.function.server.RequestPredicates.*;

@Configuration
public class UserRouter {
  
  @Bean
  public RouterFunction<ServerResponse> userRouterFunction(UserHandler handler) {
    return RouterFunctions.route()
      .nest(path("api/v1/users"), builder -> builder
        .GET("", handler::getUsers))
      .build();
  }
}
