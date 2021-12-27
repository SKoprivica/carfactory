package com.example.carfactory.application.dto;

import com.example.carfactory.infrastructure.model.VehicleCategory;
import lombok.Data;


import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
public class VehicleDetailsRequest {
    @NotNull(message = "id can not be null!")
    private Long id;
    @NotNull(message = "category can not be empty!")
    private VehicleCategory category;
    @NotEmpty(message = "type can not be empty!")
    private String type;
}
