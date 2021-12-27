package com.example.carfactory.infrastructure.repository;

import com.example.carfactory.infrastructure.model.cars.ClassicCar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassicCarRepository extends JpaRepository<ClassicCar, Long> {
}
