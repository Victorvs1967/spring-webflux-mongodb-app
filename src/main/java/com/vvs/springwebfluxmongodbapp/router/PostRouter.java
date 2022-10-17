package com.vvs.springwebfluxmongodbapp.router;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.vvs.springwebfluxmongodbapp.handle.PostHandler;

import static org.springframework.web.reactive.function.server.RequestPredicates.*;

@Configuration
public class PostRouter {
  
  @Bean
  public RouterFunction<ServerResponse> postRouterFunction(PostHandler handler) {
    return RouterFunctions.route()
      .nest(path("/api/v1/posts"), builder -> builder
        .GET("", handler::getPosts)
        .POST("", handler::createPost))
      .build();
  }
}
