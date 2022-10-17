package com.vvs.springwebfluxmongodbapp.service;

import com.vvs.springwebfluxmongodbapp.dto.PostDto;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface PostService {

  Flux<PostDto> getPosts();
  Flux<PostDto> getPostsByAuthor(String author);
  Mono<PostDto> getPostById(String id);
  Mono<PostDto> createPost(PostDto post);
  Mono<PostDto> updatePost(PostDto post);
  Mono<Void> deletePost(String id);
}
