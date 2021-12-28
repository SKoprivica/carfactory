package com.example.carfactory.application.dto;

import com.example.carfactory.infrastructure.model.Vehicle;
import com.example.carfactory.infrastructure.model.VehicleDetails;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class Parking {
    private String name;
    private int surface;
    private int occupiedArea;
    private List<VehicleDetails> vehicles;
    private boolean full;

    public List<VehicleDetails> getVehicles() {
        if (vehicles == null) {
            vehicles = new ArrayList<>();
        }
        return vehicles;
    }
}
