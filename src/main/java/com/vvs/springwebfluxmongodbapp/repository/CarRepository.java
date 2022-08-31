package com.vvs.springwebfluxmongodbapp.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.vvs.springwebfluxmongodbapp.model.Car;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface CarRepository extends ReactiveMongoRepository<Car, String> {
  Flux<Car> findByBrand(String brand);
  Mono<Car> findByModel(String model);
}
