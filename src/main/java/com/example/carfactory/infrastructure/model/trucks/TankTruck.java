package com.example.carfactory.infrastructure.model.trucks;

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
@Table(name = TankTruck.TABLE)
@SequenceGenerator(name = TankTruck.SEQUENCE_NAME, sequenceName = TankTruck.SEQUENCE_NAME, allocationSize = 1)
public class TankTruck extends BaseTruck {
    public static final String TABLE = "TANK_TRUCK";
    public static final String SEQUENCE_NAME = "S_" + TABLE;

    @Id
    @Column(name = "ID")
    private Long id;
    private Integer tankCapacity;
}
