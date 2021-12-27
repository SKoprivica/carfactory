package com.example.carfactory.presentation;

import com.example.carfactory.application.ParkingService;
import com.example.carfactory.application.VehicleDetailsService;
import com.example.carfactory.application.dto.CreateVehicleRequest;
import com.example.carfactory.application.dto.Parking;
import com.example.carfactory.application.dto.VehicleDetailsRequest;
import com.example.carfactory.infrastructure.model.Vehicle;
import com.example.carfactory.infrastructure.model.VehicleDetails;
import com.example.carfactory.infrastructure.repository.VehicleDetailsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/car-factory")
@RequiredArgsConstructor
@Slf4j
public class CarFactoryController {
    private final VehicleDetailsRepository vehicleDetailsRepository;
    private final VehicleDetailsService vehicleDetailsService;
    private final ParkingService garageService;


    @GetMapping(value = "/vehicle")
    @ResponseBody
    public List<VehicleDetails> getAllVehicle() {
        return vehicleDetailsRepository.findAll();
    }

    @PostMapping(value = "/vehicle/details")
    @ResponseBody
    public Vehicle getVehicleDetails(@RequestBody @Valid VehicleDetailsRequest request) {
        return vehicleDetailsService.find(request);
    }

    @PostMapping(value = "/vehicle/create")
    @ResponseBody
    public Vehicle createVehicle(@RequestBody @Valid CreateVehicleRequest request) {
        return vehicleDetailsService.create(request);
    }

    @GetMapping(value = "/garage/status")
    @ResponseBody
    public List<Parking> garageStatus() {
        return garageService.getStatus();
    }

}
