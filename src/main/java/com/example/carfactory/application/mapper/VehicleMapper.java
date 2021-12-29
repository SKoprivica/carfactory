package com.example.carfactory.application.mapper;

import com.example.carfactory.application.dto.CreateVehicleRequest;
import com.example.carfactory.application.dto.ParkedVehicle;
import com.example.carfactory.application.dto.VehicleBasicInfoDTO;
import com.example.carfactory.infrastructure.model.VehicleBasicInfo;
import com.example.carfactory.infrastructure.model.buses.CityBus;
import com.example.carfactory.infrastructure.model.buses.InterCityBus;
import com.example.carfactory.infrastructure.model.cars.CabrioletCar;
import com.example.carfactory.infrastructure.model.cars.ClassicCar;
import com.example.carfactory.infrastructure.model.trucks.TankTruck;
import com.example.carfactory.infrastructure.model.trucks.TowTruck;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;

@Mapper
public abstract class VehicleMapper {
    public static final VehicleMapper INSTANCE = Mappers.getMapper(VehicleMapper.class);
private static final DateTimeFormatter FORMAT = DateTimeFormatter.ofPattern("dd. MM. yyyy. HH:mm:ss");


public ParkedVehicle mapParkedVehicle(VehicleBasicInfo request){
    ParkedVehicle result = abstractMapParkedVehicle(request);
    result.setCreationDate(request.getCreationDate().format(FORMAT));
    return result;
}
    @Mapping(target = "creationDate", ignore = true)
    public abstract ParkedVehicle abstractMapParkedVehicle(VehicleBasicInfo request);
    public VehicleBasicInfoDTO mapVehicleBasicInfoDTO(VehicleBasicInfo request){
        VehicleBasicInfoDTO result = map(request);
        result.setCreationDate(request.getCreationDate().format(FORMAT));
        return result;
    }

    @Mapping(target = "creationDate", ignore = true)
    public abstract VehicleBasicInfoDTO map(VehicleBasicInfo request);

    public VehicleBasicInfo mapVehicleBasicInfo(CreateVehicleRequest request){
        VehicleBasicInfo vehicleBasicInfo = map(request);
        vehicleBasicInfo.setCreationDate(LocalDateTime.now());
        return vehicleBasicInfo;
    }
    public abstract VehicleBasicInfo map(CreateVehicleRequest request);

    public abstract CabrioletCar mapCabrioletCar(CreateVehicleRequest request);
    public abstract ClassicCar mapClassicCar(CreateVehicleRequest request);
    public abstract TowTruck mapTowTruck(CreateVehicleRequest request);
    public abstract TankTruck mapTankTruck(CreateVehicleRequest request);

    public abstract CityBus mapCityBus(CreateVehicleRequest request);
    public abstract InterCityBus mapInterCityBus(CreateVehicleRequest request);
}
