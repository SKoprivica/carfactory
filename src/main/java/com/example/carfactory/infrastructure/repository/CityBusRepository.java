package com.example.carfactory.infrastructure.repository;

import com.example.carfactory.infrastructure.model.buses.CityBus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityBusRepository extends JpaRepository<CityBus, Long> {
}
