package com.example.carfactory.infrastructure.model.cars;

import com.example.carfactory.infrastructure.model.trucks.TankTruck;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Access(AccessType.FIELD)
@Table(name = ClassicCar.TABLE)
@SequenceGenerator(name = ClassicCar.SEQUENCE_NAME, sequenceName = ClassicCar.SEQUENCE_NAME, allocationSize = 1)
public class ClassicCar extends BaseCar {
    public static final String TABLE = "CLASSIC_CAR";
    public static final String SEQUENCE_NAME = "S_" + TABLE;

    @Id
    @Column(name = "ID")
    private Long id;
    private Integer roofRackStorage;
}
