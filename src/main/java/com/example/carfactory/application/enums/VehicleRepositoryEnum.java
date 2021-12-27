package com.example.carfactory.application.enums;

import com.example.carfactory.infrastructure.model.VehicleCategory;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.List;

import static com.example.carfactory.application.enums.RepositoryEnum.*;

@RequiredArgsConstructor
@Getter
public enum VehicleRepositoryEnum {
    CAR(VehicleCategory.CAR, Arrays.asList(CLASSIC, CABRIOLET)),
    BUS(VehicleCategory.BUS, Arrays.asList(CITY_BUS, INTERCITY_BUS)),
    TRUCK(VehicleCategory.TRUCK, Arrays.asList(TOW_TRUCK, TANK_TRUCK));

    private final VehicleCategory category;
    private final List<RepositoryEnum> repositoryEnums;
}
