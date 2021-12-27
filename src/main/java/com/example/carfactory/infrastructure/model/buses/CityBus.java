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
@Table(name = CityBus.TABLE)
@SequenceGenerator(name = CityBus.SEQUENCE_NAME, sequenceName = CityBus.SEQUENCE_NAME, allocationSize = 1)
public class CityBus extends BaseBus {
    public static final String TABLE = "CITY_BUS";
    public static final String SEQUENCE_NAME = "S_" + TABLE;

    @Id
    @Column(name = "ID")
    private Long id;
    private Boolean articulated;
}
