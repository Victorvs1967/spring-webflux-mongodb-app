package com.vvs.springwebfluxmongodbapp.utils;

import java.util.stream.Collector;
import java.util.stream.Collectors;

public class ListUtils {
  
  public static <T> Collector<T, ?, T> toSingleton() {
    return Collectors.collectingAndThen(Collectors.toList(), list -> {
      if (list.size() != 1) throw new IllegalArgumentException();
      return list.get(0);
    });
  }
}
