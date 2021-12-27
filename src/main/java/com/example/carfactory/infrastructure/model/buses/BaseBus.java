package com.example.carfactory.infrastructure.model.buses;

import com.example.carfactory.infrastructure.model.Vehicle;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.MappedSuperclass;

@EqualsAndHashCode(callSuper = true)
@Data
@MappedSuperclass
public abstract class BaseBus extends Vehicle {
    private Integer standingPlaces;
    private Integer seatingPlaces;
}
