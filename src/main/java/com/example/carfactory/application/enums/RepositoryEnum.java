package com.example.carfactory.application.enums;

import com.example.carfactory.common.utils.CommonUtils;
import com.example.carfactory.infrastructure.model.buses.BusType;
import com.example.carfactory.infrastructure.model.cars.CarType;
import com.example.carfactory.infrastructure.model.trucks.TruckType;
import com.example.carfactory.infrastructure.repository.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;

@RequiredArgsConstructor
@Getter
public enum RepositoryEnum {
    CABRIOLET(CarType.CABRIOLET.name(), CabrioletCarRepository.class),
    CLASSIC(CarType.CLASSIC.name(), ClassicCarRepository.class),
    TOW_TRUCK(TruckType.TOW_TRUCK.name(), TowTruckRepository.class),
    TANK_TRUCK(TruckType.TANK_TRUCK.name(), TankTruckRepository.class),
    CITY_BUS(BusType.CITY_BUS.name(), CityBusRepository.class),
    INTERCITY_BUS(BusType.INTERCITY_BUS.name(), InterCityBusRepository.class);


    private final String type;
    private final Class<? extends JpaRepository> repository;

    public String getRepositoryKey() {
        return CommonUtils.getServiceKey(getRepository());
    }
}
