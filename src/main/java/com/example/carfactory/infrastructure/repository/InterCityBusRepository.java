package com.example.carfactory.infrastructure.repository;

import com.example.carfactory.infrastructure.model.buses.InterCityBus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterCityBusRepository extends JpaRepository<InterCityBus, Long> {
}
