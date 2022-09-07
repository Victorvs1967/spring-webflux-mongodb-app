package com.vvs.springwebfluxmongodbapp.handle;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.vvs.springwebfluxmongodbapp.dto.LoginDto;
import com.vvs.springwebfluxmongodbapp.dto.ResponseDto;
import com.vvs.springwebfluxmongodbapp.dto.UserDto;
import com.vvs.springwebfluxmongodbapp.service.AuthService;

import reactor.core.publisher.Mono;

import static org.springframework.http.MediaType.APPLICATION_JSON;

import org.springframework.beans.factory.annotation.Autowired;

@Component
public class AuthHandler {
  
  @Autowired
  private AuthService authService;

  public Mono<ServerResponse> signUp(ServerRequest request) {
    return request.bodyToMono(UserDto.class)
      .map(credentials -> authService.signUp(credentials))
      .flatMap(user -> ServerResponse
        .ok()
        .contentType(APPLICATION_JSON)
        .body(user, UserDto.class));
  }

  public Mono<ServerResponse> login(ServerRequest request) {
    return request.bodyToMono(LoginDto.class)
      .flatMap(credentials -> authService.login(credentials.getUsername(), credentials.getPassword())
      .switchIfEmpty(Mono.error(new RuntimeException("Wrong autorize...")))
      .flatMap(token -> ServerResponse
        .ok()
        .contentType(APPLICATION_JSON)
        .body(Mono.just(token), ResponseDto.class)));

  }
}
