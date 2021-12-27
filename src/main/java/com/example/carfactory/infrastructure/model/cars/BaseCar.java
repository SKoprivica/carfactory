package com.example.carfactory.infrastructure.model.cars;

import com.example.carfactory.infrastructure.model.Vehicle;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@EqualsAndHashCode(callSuper = true)
@Data
@MappedSuperclass
public abstract class BaseCar extends Vehicle {
    private Integer seats;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "ACCESSORIES", joinColumns = @JoinColumn(name = "ID"))
    @Column(name = "NAME")
    private List<String> accessories = new ArrayList<>();
}
