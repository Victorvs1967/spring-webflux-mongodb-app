package com.vvs.springwebfluxmongodbapp.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.vvs.springwebfluxmongodbapp.dto.ResponseDto;
import com.vvs.springwebfluxmongodbapp.dto.UserDto;
import com.vvs.springwebfluxmongodbapp.mapper.AppMapper;
import com.vvs.springwebfluxmongodbapp.model.User;
import com.vvs.springwebfluxmongodbapp.repository.UserRepository;
import com.vvs.springwebfluxmongodbapp.utils.JwtUtils;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
  
  private final UserRepository userRepository;
  private final AppMapper appMapper;
  private final PasswordEncoder passwordEncoder;
  private final JwtUtils jwtUtils;

  @Override
  public Mono<UserDto> signUp(UserDto user) {
    return isUserExist(user.getUsername())
      .filter(userExist -> !userExist)
      .switchIfEmpty(Mono.error(new RuntimeException("User already exist.")))
      .doOnNext(_Boolean -> isEmailExist(user.getEmail()))
      .filter(emailExist -> !emailExist)
      .switchIfEmpty(Mono.error(new RuntimeException("Email already exist.")))
      .map(aBoolean -> user)
      .map(userDto -> appMapper.convert(userDto, User.class))
      .doOnNext(usr -> usr.setPassword(passwordEncoder.encode(usr.getPassword())))
      .flatMap(userRepository::save)
      .map(usr -> appMapper.convert(usr, UserDto.class));
  }

  @Override
  public Mono<ResponseDto> login(String username, String password) {
    return userRepository.findUserByUsername(username)
      .filter(userDetails -> passwordEncoder.matches(password, userDetails.getPassword()))
      .map(userDetails -> jwtUtils.generateToken(userDetails))
      .map(token -> ResponseDto.builder()
        .response(token)
        .build());
  }

  private Mono<Boolean> isUserExist(String username) {
    return userRepository.findUserByUsername(username)
      .map(user -> true)
      .switchIfEmpty(Mono.just(false));
  }
  
  private Mono<Boolean> isEmailExist(String email) {
    return userRepository.findUserByEmail(email)
      .map(user -> true)
      .switchIfEmpty(Mono.just(false));
  }
}
