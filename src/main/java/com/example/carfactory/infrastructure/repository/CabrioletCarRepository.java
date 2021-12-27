package com.example.carfactory.infrastructure.repository;

import com.example.carfactory.infrastructure.model.VehicleDetails;
import com.example.carfactory.infrastructure.model.cars.CabrioletCar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CabrioletCarRepository extends JpaRepository<CabrioletCar, Long> {
}
