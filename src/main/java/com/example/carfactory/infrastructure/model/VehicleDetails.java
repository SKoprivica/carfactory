package com.example.carfactory.infrastructure.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Access(AccessType.FIELD)
@Table(name = VehicleDetails.TABLE)
@SequenceGenerator(name = VehicleDetails.SEQUENCE_NAME, sequenceName = VehicleDetails.SEQUENCE_NAME, allocationSize = 1)
public class VehicleDetails {
    public static final String TABLE = "VEHICLE_DETAILS";
    public static final String SEQUENCE_NAME = "S_" + TABLE;

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = SEQUENCE_NAME)
    private Long id;

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "COLOUR", nullable = false)
    private String colour;

    @Enumerated(EnumType.STRING)
    @Column(name = "CATEGORY", nullable = false)
    private VehicleCategory category;

    @Column(name = "TYPE", nullable = false)
    private String type;

}
