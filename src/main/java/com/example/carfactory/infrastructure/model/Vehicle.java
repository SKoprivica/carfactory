package com.example.carfactory.infrastructure.model;

import lombok.Data;

import javax.persistence.JoinColumn;
import javax.persistence.MappedSuperclass;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;

@Data
@MappedSuperclass
public abstract class Vehicle {
    @OneToOne
    @JoinColumn(name = "ID")
    @MapsId
    protected VehicleDetails vehicleDetails;
}
