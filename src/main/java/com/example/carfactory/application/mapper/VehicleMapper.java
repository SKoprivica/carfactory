package com.example.carfactory.application.mapper;

import com.example.carfactory.application.dto.CreateVehicleRequest;
import com.example.carfactory.infrastructure.model.VehicleDetails;
import com.example.carfactory.infrastructure.model.buses.CityBus;
import com.example.carfactory.infrastructure.model.buses.InterCityBus;
import com.example.carfactory.infrastructure.model.cars.CabrioletCar;
import com.example.carfactory.infrastructure.model.cars.ClassicCar;
import com.example.carfactory.infrastructure.model.trucks.TankTruck;
import com.example.carfactory.infrastructure.model.trucks.TowTruck;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public abstract class VehicleMapper {
    public static final VehicleMapper INSTANCE = Mappers.getMapper(VehicleMapper.class);

    public abstract VehicleDetails map(CreateVehicleRequest request);

    public abstract CabrioletCar mapCabrioletCar(CreateVehicleRequest request);
    public abstract ClassicCar mapClassicCar(CreateVehicleRequest request);
    public abstract TowTruck mapTowTruck(CreateVehicleRequest request);
    public abstract TankTruck mapTankTruck(CreateVehicleRequest request);

    public abstract CityBus mapCityBus(CreateVehicleRequest request);
    public abstract InterCityBus mapInterCityBus(CreateVehicleRequest request);
}
