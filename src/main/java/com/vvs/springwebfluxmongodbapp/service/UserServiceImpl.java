package com.vvs.springwebfluxmongodbapp.service;

import java.sql.Date;
import java.time.Instant;

import org.springframework.stereotype.Service;

import com.vvs.springwebfluxmongodbapp.dto.UserDto;
import com.vvs.springwebfluxmongodbapp.mapper.AppMapper;
import com.vvs.springwebfluxmongodbapp.model.User;
import com.vvs.springwebfluxmongodbapp.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
  
  private final UserRepository userRepository;
  private final AppMapper appMapper;

  @Override
  public Flux<UserDto> getUsers() {
    return userRepository.findAll()
      .map(user -> appMapper.convert(user, UserDto.class));
  }

  @Override
  public Mono<UserDto> getUser(String username) {
    return userRepository.findUserByUsername(username)
      .switchIfEmpty(Mono.error(new RuntimeException("User not found.")))
      .map(user -> appMapper.convert(user, UserDto.class));
  }

  @Override
  public Mono<UserDto> getUserByEmail(String email) {
    return userRepository.findUserByEmail(email)
      .switchIfEmpty(Mono.error(new RuntimeException("Email not found.")))
      .map(user -> appMapper.convert(user, UserDto.class));
  }

  @Override
  public Mono<UserDto> updateUser(UserDto userDto) {
    return userRepository.findUserByUsername(userDto.getUsername())
      .switchIfEmpty(Mono.error(new RuntimeException("User not found.")))
      .map(user -> User.builder()
        .id(user.getId())
        .username(userDto.getUsername())
        .password(userDto.getPassword())
        .email(userDto.getEmail())
        .firstName(userDto.getFirstName())
        .lastName(userDto.getLastName())
        .onCreate(user.getOnCreate())
        .onUpdate(Date.from(Instant.now()))
        .isActive(user.isEnabled())
        .role(userDto.getRole())
        .build())
      .flatMap(userRepository::save)
      .map(user -> appMapper.convert(user, UserDto.class));
  }

  @Override
  public Mono<UserDto> deleteUser(String username) {
    return userRepository.findUserByUsername(username)
      .switchIfEmpty(Mono.error(new RuntimeException("User not found.")))
      .flatMap(this::delete)
      .map(user -> appMapper.convert(user, UserDto.class));
  }

  private Mono<User> delete(User user) {
    return Mono.fromSupplier(() -> {
      userRepository.delete(user).subscribe();
      return user;
    });
  }

}
