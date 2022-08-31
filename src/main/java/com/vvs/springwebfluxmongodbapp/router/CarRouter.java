package com.vvs.springwebfluxmongodbapp.router;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.vvs.springwebfluxmongodbapp.handle.CarHandler;

import static org.springframework.web.reactive.function.server.RequestPredicates.*;

@Configuration
public class CarRouter {
  
  @Bean
  public RouterFunction<ServerResponse> carRouterFunction(CarHandler handler) {
    return RouterFunctions.route()
      .nest(path("/api/v1/cars"), builder -> builder
        .GET("", handler::getCars)
        .GET("/car/{id}", handler::getCar)
        .GET("/brands", handler::getAllBrands)
        .GET("/brands/{brand}", handler::getCarsByBrand)
        .POST("", handler::addCar)
        .PUT("", handler::updateCar)
        .DELETE("/{id}", handler::deleteCar))
      .build();
  }
}
