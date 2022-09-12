package com.vvs.springwebfluxmongodbapp.handle;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.vvs.springwebfluxmongodbapp.dto.UserDto;
import com.vvs.springwebfluxmongodbapp.service.UserService;
import com.vvs.springwebfluxmongodbapp.utils.JwtUtils;

import reactor.core.publisher.Mono;

import static org.springframework.http.MediaType.APPLICATION_JSON;

import org.springframework.beans.factory.annotation.Autowired;

@Component
public class UserHandler {
  
  @Autowired
  private UserService userService;
  @Autowired
  private JwtUtils jwtUtils;

  public Mono<ServerResponse> getUsers(ServerRequest request) {
    String token = request.headers().firstHeader("authorization").substring(7);
    return jwtUtils.validateToken(token)
      .map(isValid -> !isValid)
      .switchIfEmpty(Mono.error(new RuntimeException("Not autorized...")))
      .map(autorized -> userService.getUsers())
      .flatMap(users -> ServerResponse
        .ok()
        .contentType(APPLICATION_JSON)
        .body(users, UserDto.class));
  }
}
