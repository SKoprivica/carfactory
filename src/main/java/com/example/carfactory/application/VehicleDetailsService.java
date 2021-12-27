package com.example.carfactory.application;

import com.example.carfactory.application.dto.CreateVehicleRequest;
import com.example.carfactory.application.dto.VehicleDetailsRequest;
import com.example.carfactory.infrastructure.model.Vehicle;

public interface VehicleDetailsService {
    Vehicle find(VehicleDetailsRequest request);

    Vehicle create(CreateVehicleRequest request);
}
