package com.example.carfactory.presentation;

import com.example.carfactory.application.ParkingService;
import com.example.carfactory.application.VehicleDetailsService;
import com.example.carfactory.application.dto.CreateVehicleRequest;
import com.example.carfactory.application.dto.Parking;
import com.example.carfactory.application.dto.VehicleBasicInfoDTO;
import com.example.carfactory.application.dto.VehicleDetailsRequest;
import com.example.carfactory.application.mapper.VehicleMapper;
import com.example.carfactory.infrastructure.model.Vehicle;
import com.example.carfactory.infrastructure.model.VehicleBasicInfo;
import com.example.carfactory.infrastructure.repository.VehicleDetailsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/car-factory")
@RequiredArgsConstructor
@Slf4j
public class CarFactoryController {

    private final VehicleDetailsService vehicleDetailsService;
    private final ParkingService parkingService;


    @GetMapping(value = "/vehicle")
    @ResponseBody
    public List<VehicleBasicInfoDTO> getAllVehicle() {
        return vehicleDetailsService.getAllVehicle();
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

    @GetMapping(value = "/parking/status")
    @ResponseBody
    public List<Parking> parkingStatus() {
        return parkingService.getStatus();
    }

}
