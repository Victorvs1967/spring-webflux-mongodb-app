package com.vvs.springwebfluxmongodbapp.handle;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.vvs.springwebfluxmongodbapp.dto.CarDto;
import com.vvs.springwebfluxmongodbapp.service.CarService;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

import static org.springframework.http.MediaType.APPLICATION_JSON;

import java.util.HashSet;
import java.util.Set;

@Component
@RequiredArgsConstructor
public class CarHandler {
  
  private final CarService carService;

  public Mono<ServerResponse> getCars(ServerRequest request) {
    return ServerResponse
      .ok()
      .contentType(APPLICATION_JSON)
      .body(carService.findAllCars(), CarDto.class);
  }

  public Mono<ServerResponse> addCar(ServerRequest request) {
    return request.bodyToMono(CarDto.class)
      .map(carService::addCar)
      .flatMap(carDto -> ServerResponse
        .ok()
        .contentType(APPLICATION_JSON)
        .body(carDto, CarDto.class));
  }

  public Mono<ServerResponse> getAllBrands(ServerRequest request) {
    return carService.findAllCarBrands()
      .flatMap(brands -> ServerResponse
        .ok()
        .contentType(APPLICATION_JSON)
        .body(Mono.just(new HashSet<String>(brands)), Set.class));
  }

  public Mono<ServerResponse> getCarsByBrand(ServerRequest request) {
    return Mono.just(request.pathVariable("brand"))
      .map(brand -> carService.findCarsByBrand(brand))
      .flatMap(cars -> ServerResponse
        .ok()
        .contentType(APPLICATION_JSON)
        .body(cars, CarDto.class));
  }

  public Mono<ServerResponse> updateCar(ServerRequest request) {
    return request.bodyToMono(CarDto.class)
      .map(carService::updateCar)
      .flatMap(carDto -> ServerResponse
        .ok()
        .contentType(APPLICATION_JSON)
        .body(carDto, CarDto.class));
  }

  public Mono<ServerResponse> getCar(ServerRequest request) {
    return carService.findCarById(request.pathVariable("id"))
      .flatMap(car -> ServerResponse
        .ok()
        .contentType(APPLICATION_JSON)
        .body(Mono.just(car), CarDto.class));
  }

  public Mono<ServerResponse> deleteCar(ServerRequest request) {
    return Mono.just(request.pathVariable("id"))
      .flatMap(id -> ServerResponse
        .ok()
        .contentType(APPLICATION_JSON)
        .body(carService.deleteCar(id), Void.class));
  }

}
