package com.example.carfactory.application.enums;

import com.example.carfactory.infrastructure.model.buses.BusType;
import com.example.carfactory.infrastructure.model.cars.CarType;
import com.example.carfactory.infrastructure.model.trucks.TruckType;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum VehicleSurfaceEnum {
    CABRIOLET(CarType.CABRIOLET.name(), 8),
    CLASSIC(CarType.CLASSIC.name(), 8),
    TOW_TRUCK(TruckType.TOW_TRUCK.name(), 15),
    TANK_TRUCK(TruckType.TANK_TRUCK.name(), 20),
    CITY_BUS(BusType.CITY_BUS.name(), 30),
    INTERCITY_BUS(BusType.INTERCITY_BUS.name(), 15);


    private final String type;
    private final int surface;
}
