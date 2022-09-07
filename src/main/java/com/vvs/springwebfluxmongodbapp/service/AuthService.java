package com.vvs.springwebfluxmongodbapp.service;

import com.vvs.springwebfluxmongodbapp.dto.ResponseDto;
import com.vvs.springwebfluxmongodbapp.dto.UserDto;

import reactor.core.publisher.Mono;

public interface AuthService {
  Mono<UserDto> signUp(UserDto user);
  Mono<ResponseDto> login(String username, String password);
}
