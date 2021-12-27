package com.example.carfactory.infrastructure.repository;

import com.example.carfactory.infrastructure.model.trucks.TankTruck;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TankTruckRepository extends  JpaRepository<TankTruck, Long> {
}
