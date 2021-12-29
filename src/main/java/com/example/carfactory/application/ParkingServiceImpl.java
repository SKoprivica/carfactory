package com.example.carfactory.application;

import com.example.carfactory.application.dto.ParkedVehicle;
import com.example.carfactory.application.dto.Parking;
import com.example.carfactory.application.enums.ParkingEnum;
import com.example.carfactory.application.enums.VehicleSurfaceEnum;
import com.example.carfactory.application.mapper.VehicleMapper;
import com.example.carfactory.infrastructure.model.VehicleBasicInfo;
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
    private final int minVehicleSurface = getMinVehicleSurface();


    @Override
    public List<Parking> getStatus() {
        List<VehicleBasicInfo> vehicles = vehicleDetailsRepository.findAll();
        List<Parking> parkings = Stream.of(ParkingEnum.values()).map(p -> {
            Parking parking = new Parking();
            parking.setName(p.getName());
            parking.setSurface(p.getSurface());
            return parking;
        }).collect(Collectors.toList());

        for (VehicleBasicInfo vehicleBasicInfo : vehicles) {
            for (Parking parking : parkings) {
                if (parking.isFull()) {
                    continue;
                }
                int vehicleSurface = getVehicleSurface(vehicleBasicInfo.getType());
                if ((parking.getSurface() - parking.getOccupiedArea()) > vehicleSurface) {
                    ParkedVehicle parkedVehicle = VehicleMapper.INSTANCE.mapParkedVehicle(vehicleBasicInfo);
                    parkedVehicle.setSize(vehicleSurface);
                    parking.getVehicles().add(parkedVehicle);
                    parking.setOccupiedArea(parking.getOccupiedArea() + vehicleSurface);
                    if ((parking.getSurface() - parking.getOccupiedArea()) < minVehicleSurface) {
                        parking.setFull(true);
                    }
                }
            }
        }

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

}
