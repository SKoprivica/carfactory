package com.example.carfactory.application.dto;

import com.example.carfactory.infrastructure.model.VehicleCategory;
import lombok.Data;

import java.util.List;

@Data
public class CreateVehicleRequest {
    private Long id;
    private String name;
    private String colour;
    private VehicleCategory category;
    private String type;

    //CAR
    private Integer seats;
    private List<String> accessories;
    private Integer roofRackStorage;
    private Boolean detachableHardtops;
    //BUS
    private Integer standingPlaces;
    private Integer seatingPlaces;
    private Boolean articulated;
    private Integer luggageCapacity;
    //TRUCK
    private Integer axlesNumber;
    private Integer tankCapacity;
    private Integer tractionPower;
}
