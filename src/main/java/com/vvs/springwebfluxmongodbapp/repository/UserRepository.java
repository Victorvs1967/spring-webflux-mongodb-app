package com.vvs.springwebfluxmongodbapp.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.vvs.springwebfluxmongodbapp.model.User;

import reactor.core.publisher.Mono;

public interface UserRepository extends ReactiveMongoRepository<User, String> {
  public Mono<User> findUserByUsername(String username);
  public Mono<User> findUserByEmail(String email);
}
