package com.example.carfactory.application;

import com.example.carfactory.application.dto.Parking;
import com.example.carfactory.application.enums.ParkingEnum;
import com.example.carfactory.application.enums.VehicleSurfaceEnum;
import com.example.carfactory.infrastructure.model.VehicleDetails;
import com.example.carfactory.infrastructure.repository.VehicleDetailsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RequiredArgsConstructor
@Service
public class ParkingServiceImpl implements ParkingService {
    private final VehicleDetailsRepository vehicleDetailsRepository;


    @Override
    public List<Parking> getStatus() {
        List<VehicleDetails> vehicles = vehicleDetailsRepository.findAll();
        int minVehicleSurface = getMinVehicleSurface();
        Parking garage = new Parking();
        garage.setName(ParkingEnum.COVERED_5.getName());
        garage.setSurface(ParkingEnum.COVERED_2_5.getSurface());

        return null;
    }

    private Integer getMinVehicleSurface() {
        return Stream.of(VehicleSurfaceEnum.values()).map(VehicleSurfaceEnum::getSurface).sorted().collect(Collectors.toList()).get(0);
    }
}
