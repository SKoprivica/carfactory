package com.example.carfactory.application.dto;

import com.example.carfactory.infrastructure.model.VehicleBasicInfo;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class Parking {
    private String name;
    private int surface;
    private int occupiedArea;
    private List<ParkedVehicle> vehicles;
    private boolean full;

    public List<ParkedVehicle> getVehicles() {
        if (vehicles == null) {
            vehicles = new ArrayList<>();
        }
        return vehicles;
    }
}
