package com.vvs.springwebfluxmongodbapp.service;

import com.vvs.springwebfluxmongodbapp.dto.UserDto;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface UserService {
  public Flux<UserDto> getUsers();
  public Mono<UserDto> getUser(String username);
  public Mono<UserDto> getUserByEmail(String email);
  public Mono<UserDto> updateUser(UserDto user);
  public Mono<UserDto> deleteUser(String username);
}
