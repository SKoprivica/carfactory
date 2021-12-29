package com.example.carfactory.infrastructure.repository;

import com.example.carfactory.infrastructure.model.VehicleBasicInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface VehicleDetailsRepository extends JpaRepository<VehicleBasicInfo, Long> {
    @Transactional(readOnly = true)
    List<VehicleBasicInfo> findAllByOrderByCreationDateDesc();
}
