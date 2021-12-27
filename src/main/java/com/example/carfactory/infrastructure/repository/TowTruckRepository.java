package com.example.carfactory.infrastructure.repository;

import com.example.carfactory.infrastructure.model.trucks.TowTruck;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TowTruckRepository extends JpaRepository<TowTruck, Long> {
}
