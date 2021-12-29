package com.example.carfactory.application.dto;

import com.example.carfactory.infrastructure.model.VehicleCategory;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class VehicleBasicInfoDTO {
    private Long id;
    private String name;
    private String colour;
    private VehicleCategory category;
    private String type;
    private String creationDate;
}
