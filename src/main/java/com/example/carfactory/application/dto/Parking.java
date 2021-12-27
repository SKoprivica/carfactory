package com.example.carfactory.application.dto;

import com.example.carfactory.infrastructure.model.Vehicle;
import lombok.Data;

import java.util.List;

@Data
public class Parking {
    private String name;
    private int surface;
    private int occupiedArea;
    private List<Vehicle> vehicles;
    private boolean full;
}
