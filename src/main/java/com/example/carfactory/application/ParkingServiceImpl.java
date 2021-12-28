package com.example.carfactory.application;

import com.example.carfactory.application.dto.Parking;
import com.example.carfactory.application.enums.ParkingEnum;
import com.example.carfactory.application.enums.VehicleSurfaceEnum;
import com.example.carfactory.infrastructure.model.VehicleDetails;
import com.example.carfactory.infrastructure.repository.VehicleDetailsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RequiredArgsConstructor
@Service
public class ParkingServiceImpl implements ParkingService {
    private final VehicleDetailsRepository vehicleDetailsRepository;
    private final int minVehicleSurface = getMinVehicleSurface();


    @Override
    public List<Parking> getStatus() {
        List<VehicleDetails> vehicles = vehicleDetailsRepository.findAll();

        List<Parking> parkings = new ArrayList<>();
        Parking parking2_5 = new Parking();
        parkings.add(parking2_5);
        parking2_5.setName(ParkingEnum.COVERED_2_5.getName());
        parking2_5.setSurface(ParkingEnum.COVERED_2_5.getSurface());
        populateParking(parking2_5, vehicles, 0);


        return parkings;
    }

    private int getVehicleSurface(String type) {
        for (VehicleSurfaceEnum e : VehicleSurfaceEnum.values()) {
            if (e.getType().equals(type)) {
                return e.getSurface();
            }
        }
        return 0;
    }

    private Integer getMinVehicleSurface() {
        return Stream.of(VehicleSurfaceEnum.values()).map(VehicleSurfaceEnum::getSurface).sorted().collect(Collectors.toList()).get(0);
    }

    private void populateParking(Parking parking, List<VehicleDetails> vehicles, int index) {
        if (parking.isFull() || vehicles.size() == index) {
            return;
        }
        VehicleDetails vehicle = vehicles.get(index);
        int vehicleSurface = getVehicleSurface(vehicle.getType());
        if ((parking.getSurface() - parking.getOccupiedArea()) > vehicleSurface) {
            parking.getVehicles().add(vehicle);
            parking.setOccupiedArea(parking.getOccupiedArea() + vehicleSurface);
            if ((parking.getSurface() - parking.getOccupiedArea()) < minVehicleSurface) {
                parking.setFull(true);
            }
        }
        populateParking(parking, vehicles, index++);
    }
}
