package com.example.carfactory.application;

import com.example.carfactory.application.dto.CreateVehicleRequest;
import com.example.carfactory.application.enums.RepositoryEnum;
import com.example.carfactory.application.mapper.VehicleMapper;
import com.example.carfactory.infrastructure.model.Vehicle;
import com.example.carfactory.infrastructure.model.VehicleDetails;
import com.example.carfactory.infrastructure.model.buses.CityBus;
import com.example.carfactory.infrastructure.model.buses.InterCityBus;
import com.example.carfactory.infrastructure.model.cars.CabrioletCar;
import com.example.carfactory.infrastructure.model.cars.ClassicCar;
import com.example.carfactory.infrastructure.model.trucks.TankTruck;
import com.example.carfactory.infrastructure.model.trucks.TowTruck;
import com.example.carfactory.infrastructure.repository.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;
import java.util.function.BiFunction;

@RequiredArgsConstructor
@Service
@Getter
public class CreateVehicleServiceImpl implements CreateVehicleService {
    private final Map<String, BiFunction<JpaRepository, CreateVehicleRequest, Vehicle>> createVehicleMap = creatingCreateVehicleMap();

    private Map<String, BiFunction<JpaRepository, CreateVehicleRequest, Vehicle>> creatingCreateVehicleMap() {
        Map<String, BiFunction<JpaRepository, CreateVehicleRequest, Vehicle>> result = new HashMap<>();
        result.put(RepositoryEnum.CABRIOLET.getType(), this::createCabriolet);
        result.put(RepositoryEnum.CLASSIC.getType(), this::createClassicCar);
        result.put(RepositoryEnum.TOW_TRUCK.getType(), this::createTowTruck);
        result.put(RepositoryEnum.TANK_TRUCK.getType(), this::createTankTruck);
        result.put(RepositoryEnum.CITY_BUS.getType(), this::createCityBus);
        result.put(RepositoryEnum.INTERCITY_BUS.getType(), this::createInterCityBus);
        return result;
    }

    private Vehicle createCabriolet(JpaRepository repository, CreateVehicleRequest request) {
        return createCabriolet((CabrioletCarRepository) repository, request);
    }

    private Vehicle createClassicCar(JpaRepository repository, CreateVehicleRequest request) {
        return createClassicCar((ClassicCarRepository) repository, request);
    }

    private Vehicle createTowTruck(JpaRepository repository, CreateVehicleRequest request) {
        return createTowTruck((TowTruckRepository) repository, request);
    }

    private Vehicle createTankTruck(JpaRepository repository, CreateVehicleRequest request) {
        return createTankTruck((TankTruckRepository) repository, request);
    }

    private Vehicle createCityBus(JpaRepository repository, CreateVehicleRequest request) {
        return createCityBus((CityBusRepository) repository, request);
    }

    private Vehicle createInterCityBus(JpaRepository repository, CreateVehicleRequest request) {
        return createInterCityBus((InterCityBusRepository) repository, request);
    }

    @Transactional
    private Vehicle createCabriolet(CabrioletCarRepository repository, CreateVehicleRequest request) {
        CabrioletCar vehicle = VehicleMapper.INSTANCE.mapCabrioletCar(request);
        VehicleDetails vehicleDetails = VehicleMapper.INSTANCE.map(request);
        vehicle.setVehicleDetails(vehicleDetails);
        return repository.save(vehicle);
    }

    @Transactional
    private Vehicle createClassicCar(ClassicCarRepository repository, CreateVehicleRequest request) {
        ClassicCar vehicle = VehicleMapper.INSTANCE.mapClassicCar(request);
        VehicleDetails vehicleDetails = VehicleMapper.INSTANCE.map(request);
        vehicle.setVehicleDetails(vehicleDetails);
        return repository.save(vehicle);
    }

    @Transactional
    private Vehicle createTowTruck(TowTruckRepository repository, CreateVehicleRequest request) {
        TowTruck vehicle = VehicleMapper.INSTANCE.mapTowTruck(request);
        VehicleDetails vehicleDetails = VehicleMapper.INSTANCE.map(request);
        vehicle.setVehicleDetails(vehicleDetails);
        return repository.save(vehicle);
    }

    @Transactional
    private Vehicle createTankTruck(TankTruckRepository repository, CreateVehicleRequest request) {
        TankTruck vehicle = VehicleMapper.INSTANCE.mapTankTruck(request);
        VehicleDetails vehicleDetails = VehicleMapper.INSTANCE.map(request);
        vehicle.setVehicleDetails(vehicleDetails);
        return repository.save(vehicle);
    }

    @Transactional
    private Vehicle createCityBus(CityBusRepository repository, CreateVehicleRequest request) {
        CityBus vehicle = VehicleMapper.INSTANCE.mapCityBus(request);
        VehicleDetails vehicleDetails = VehicleMapper.INSTANCE.map(request);
        vehicle.setVehicleDetails(vehicleDetails);
        return repository.save(vehicle);
    }

    @Transactional
    private Vehicle createInterCityBus(InterCityBusRepository repository, CreateVehicleRequest request) {
        InterCityBus vehicle = VehicleMapper.INSTANCE.mapInterCityBus(request);
        VehicleDetails vehicleDetails = VehicleMapper.INSTANCE.map(request);
        vehicle.setVehicleDetails(vehicleDetails);
        return repository.save(vehicle);
    }
}
