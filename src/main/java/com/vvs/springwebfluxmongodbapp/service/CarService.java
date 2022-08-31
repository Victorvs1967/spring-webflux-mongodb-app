package com.vvs.springwebfluxmongodbapp.service;

import java.util.List;

import com.vvs.springwebfluxmongodbapp.dto.CarDto;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface CarService {
  
  Flux<CarDto> findAllCars();
  Mono<List<String>> findAllCarBrands();
  Mono<CarDto> findCarById(String id);
  Flux<CarDto> findCarsByBrand(String brand);
  Mono<CarDto> findCarByModel(String model);
  Mono<CarDto> addCar(CarDto car);
  Mono<CarDto> updateCar(CarDto car);
  Mono<Void> deleteCar(String id);
  Mono<Boolean> existCarById(String id);
}
