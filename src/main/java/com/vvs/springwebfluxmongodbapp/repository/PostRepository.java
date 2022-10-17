package com.vvs.springwebfluxmongodbapp.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.vvs.springwebfluxmongodbapp.model.Post;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface PostRepository extends ReactiveMongoRepository<Post, String> {
  Flux<Post> findByAuthor(String author);
  Mono<Post> findByTitle(String title);
}
