package com.vvs.springwebfluxmongodbapp.handle;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.vvs.springwebfluxmongodbapp.dto.CarDto;
import com.vvs.springwebfluxmongodbapp.service.CarService;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

import static org.springframework.http.MediaType.APPLICATION_JSON;

import java.util.List;

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
    return ServerResponse
      .ok()
      .contentType(APPLICATION_JSON)
      .body(carService.findAllCarBrands(), List.class);
  }

  public Mono<ServerResponse> getCarsByBrand(ServerRequest request) {
    String brand = request.pathVariable("brand");
    return ServerResponse
      .ok()
      .contentType(APPLICATION_JSON)
      .body(carService.findCarsByBrand(brand), CarDto.class);
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
    return ServerResponse
        .ok()
        .contentType(APPLICATION_JSON)
        .body(carService.findCarById(request.pathVariable("id")), CarDto.class);
  }

  public Mono<ServerResponse> deleteCar(ServerRequest request) {
    return ServerResponse
      .ok()
      .contentType(APPLICATION_JSON)
      .body(carService.deleteCar(request.pathVariable("id")), Void.class);
  }

}
