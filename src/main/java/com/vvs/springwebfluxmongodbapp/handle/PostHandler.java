package com.vvs.springwebfluxmongodbapp.handle;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.vvs.springwebfluxmongodbapp.dto.PostDto;
import com.vvs.springwebfluxmongodbapp.service.PostService;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

import static org.springframework.http.MediaType.APPLICATION_JSON;

@Component
@RequiredArgsConstructor
public class PostHandler {
  
  private final PostService postService;

  public Mono<ServerResponse> createPost(ServerRequest request) {
    return request.bodyToMono(PostDto.class)
      .map(postService::createPost)
      .flatMap(post -> ServerResponse
        .ok()
        .contentType(APPLICATION_JSON)
        .body(post, PostDto.class));
  }

  public Mono<ServerResponse> getPosts(ServerRequest request) {
    return ServerResponse
      .ok()
      .contentType(APPLICATION_JSON)
      .body(postService.getPosts(), PostDto.class);
  }
}
