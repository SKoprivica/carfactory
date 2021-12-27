package com.example.carfactory.infrastructure.repository;

import com.example.carfactory.infrastructure.model.VehicleDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleDetailsRepository extends JpaRepository<VehicleDetails, Long> {
}
