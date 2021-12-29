package com.example.carfactory.application.dto;

import com.example.carfactory.infrastructure.model.VehicleCategory;
import lombok.Data;

@Data
public class ParkedVehicle {
    private Long id;
    private String name;
    private String colour;
    private VehicleCategory category;
    private String type;
    private Integer size;
    private String creationDate;
}
