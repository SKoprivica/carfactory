package com.example.carfactory.application.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum ParkingEnum {
    COVERED_2_5("COVERED_2_5", 30),
    COVERED_5("COVERED_5", 50),
    NON_COVERED("NON_COVERED", 1000);
    private final String name;
    private final int surface;
}
