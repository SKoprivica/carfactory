package com.example.carfactory.application;

import com.example.carfactory.application.dto.CreateVehicleRequest;
import com.example.carfactory.application.dto.VehicleBasicInfoDTO;
import com.example.carfactory.application.dto.VehicleDetailsRequest;
import com.example.carfactory.infrastructure.model.Vehicle;

import java.util.List;

public interface VehicleDetailsService {
    List<VehicleBasicInfoDTO> getAllVehicle();

    Vehicle find(VehicleDetailsRequest request);

    Vehicle create(CreateVehicleRequest request);
}
