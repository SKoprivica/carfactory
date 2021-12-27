package com.example.carfactory.application;

import com.example.carfactory.application.dto.CreateVehicleRequest;
import com.example.carfactory.infrastructure.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Map;
import java.util.function.BiFunction;

public interface CreateVehicleService {
    Map<String, BiFunction<JpaRepository, CreateVehicleRequest, Vehicle>> getCreateVehicleMap();
}
