package com.example.carfactory.infrastructure.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Access(AccessType.FIELD)
@Table(name = VehicleBasicInfo.TABLE)
@SequenceGenerator(name = VehicleBasicInfo.SEQUENCE_NAME, sequenceName = VehicleBasicInfo.SEQUENCE_NAME, allocationSize = 1)
public class VehicleBasicInfo {
    public static final String TABLE = "VEHICLE_BASIC_INFO";
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

    @CreatedDate
    @Column(name = "CREATION_DATE", nullable = false, updatable = false)
    private LocalDateTime creationDate;

}
