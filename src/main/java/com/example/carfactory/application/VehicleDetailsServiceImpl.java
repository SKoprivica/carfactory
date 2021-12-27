package com.example.carfactory.application;

import com.example.carfactory.application.dto.CreateVehicleRequest;
import com.example.carfactory.application.dto.VehicleDetailsRequest;
import com.example.carfactory.application.enums.RepositoryEnum;
import com.example.carfactory.application.enums.VehicleRepositoryEnum;
import com.example.carfactory.common.errorhandling.CarFactoryException;
import com.example.carfactory.infrastructure.model.Vehicle;
import com.example.carfactory.infrastructure.model.VehicleCategory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class VehicleDetailsServiceImpl implements VehicleDetailsService {
    private final CreateVehicleService createVehicleService;
    private final Map<String, JpaRepository> repositoryMap;

    @Override
    public Vehicle find(VehicleDetailsRequest request) {
        RepositoryEnum repositoryEnumField = getRepositoryEnumField(request.getType(), request.getCategory());
        return getVehicle(request, repositoryEnumField);
    }

    @Override
    public Vehicle create(CreateVehicleRequest request) {
        RepositoryEnum repositoryEnumField = getRepositoryEnumField(request.getType(), request.getCategory());
        return createVehicle(request, repositoryEnumField);
    }

    private Vehicle createVehicle(CreateVehicleRequest request, RepositoryEnum repositoryEnum) {
        JpaRepository repository = repositoryMap.get(repositoryEnum.getRepositoryKey());
        if (repository != null && createVehicleService.getCreateVehicleMap().containsKey(repositoryEnum.getType())) {
            return createVehicleService.getCreateVehicleMap().get(repositoryEnum.getType()).apply(repository, request);
        }
        throw new CarFactoryException(String.format("No service for type %s", request.getType()));
    }

    private RepositoryEnum getRepositoryEnumField(String type, VehicleCategory requestCategory) {
        VehicleRepositoryEnum vehicleRepositoryEnumField = Stream.of(VehicleRepositoryEnum.values())
                .filter(p -> p.getCategory().equals(requestCategory))
                .findAny()
                .orElseThrow(() -> new CarFactoryException(String.format("No service for category %s", requestCategory)));

        return vehicleRepositoryEnumField.getRepositoryEnums()
                .stream()
                .filter(p -> p.getType().equals(type))
                .findAny()
                .orElseThrow(() -> new CarFactoryException(String.format("No service for type %s", type)));

    }

    private Vehicle getVehicle(VehicleDetailsRequest request, RepositoryEnum repositoryEnum) {
        if (repositoryMap.containsKey(repositoryEnum.getRepositoryKey())) {
            Optional<Object> result = repositoryMap
                    .get(repositoryEnum.getRepositoryKey())
                    .findById(request.getId());
            if (result.isPresent()) {
                return (Vehicle) result.get();
            }
            throw new CarFactoryException(String.format("No %s with id %s", request.getType(), request.getId()));
        } else {
            throw new CarFactoryException(String.format("No service for %s with id %s", request.getType(), request.getId()));
        }
    }
}
