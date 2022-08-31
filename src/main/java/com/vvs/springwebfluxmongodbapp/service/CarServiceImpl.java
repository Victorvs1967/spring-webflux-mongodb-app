package com.vvs.springwebfluxmongodbapp.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.vvs.springwebfluxmongodbapp.dto.CarDto;
import com.vvs.springwebfluxmongodbapp.mapper.CarMapper;
import com.vvs.springwebfluxmongodbapp.model.Car;
import com.vvs.springwebfluxmongodbapp.repository.CarRepository;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@Transactional
@RequiredArgsConstructor
public class CarServiceImpl implements CarService {

  private final CarRepository carRepository;
  private final CarMapper carMapper;

  @Override
  public Flux<CarDto> findAllCars() {
    return carRepository.findAll()
      .map(car -> carMapper.convert(car, CarDto.class));
  }

  @Override
  public Mono<CarDto> findCarById(String id) {
    return carRepository.findById(id)
      .switchIfEmpty(Mono.error(new RuntimeException("Car not found.")))
      .map(car -> carMapper.convert(car, CarDto.class));
  }

  @Override
  public Mono<List<String>> findAllCarBrands() {
    return carRepository.findAll()
      .mapNotNull(car -> car.getBrand())
      .collectList();
  }

  @Override
  public Flux<CarDto> findCarsByBrand(String brand) {
    return carRepository.findByBrand(brand)
      .switchIfEmpty(Mono.error(new RuntimeException("Brand not found.")))
      .map(car -> carMapper.convert(car, CarDto.class));
  }

  @Override
  public Mono<CarDto> findCarByModel(String model) {
    return carRepository.findByModel(model)
      .switchIfEmpty(Mono.error(new RuntimeException("Car not found.")))
      .map(car -> carMapper.convert(car, CarDto.class));
  }

  @Override
  public Mono<CarDto> addCar(CarDto carDto) {
    return carRepository.save(carMapper.convert(carDto, Car.class))
      .map(car -> carMapper.convert(car, CarDto.class));
  }

  @Override
  public Mono<CarDto> updateCar(CarDto carDto) {
    return carRepository.findById(carDto.getId())
      .switchIfEmpty(Mono.error(new RuntimeException("Car not found.")))
      .map(isCar -> Car.builder()
          .id(carDto.getId())
          .brand(carDto.getBrand())
          .model(carDto.getModel())
        .build())
      .flatMap(carRepository::save)
      .map(exCar -> carMapper.convert(exCar, CarDto.class));
  }

  @Override
  public Mono<Void> deleteCar(String id) {
    return Mono.just(id)
      .filterWhen(isCar -> existCarById(id))
      .switchIfEmpty(Mono.error(new RuntimeException("Car not found.")))
      .flatMap(carRepository::deleteById);
  }

  @Override
  public Mono<Boolean> existCarById(String id) {
    return carRepository.existsById(id);
  }

}
