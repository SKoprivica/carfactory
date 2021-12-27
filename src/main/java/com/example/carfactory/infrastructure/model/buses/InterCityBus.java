package com.example.carfactory.infrastructure.model.buses;

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
@Table(name = InterCityBus.TABLE)
@SequenceGenerator(name = InterCityBus.SEQUENCE_NAME, sequenceName = InterCityBus.SEQUENCE_NAME, allocationSize = 1)
public class InterCityBus extends BaseBus {
    public static final String TABLE = "INTERCITY_BUS";
    public static final String SEQUENCE_NAME = "S_" + TABLE;

    @Id
    @Column(name = "ID")
    private Long id;

    private Integer luggageCapacity;
}
