package com.example.carfactory.infrastructure.model.trucks;

import com.example.carfactory.infrastructure.model.Vehicle;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.MappedSuperclass;

@EqualsAndHashCode(callSuper = true)
@Data
@MappedSuperclass
public abstract class BaseTruck extends Vehicle {
    protected Integer axlesNumber;
}
