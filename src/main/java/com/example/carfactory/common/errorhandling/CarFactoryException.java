package com.example.carfactory.common.errorhandling;

public class CarFactoryException extends RuntimeException {
    public CarFactoryException(String message) {
        super(message);
    }
}
