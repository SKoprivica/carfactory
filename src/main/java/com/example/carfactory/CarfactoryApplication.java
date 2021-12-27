package com.example.carfactory;

import com.example.carfactory.configuration.CarFactoryConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@EnableConfigurationProperties(CarFactoryConfiguration.class)
@SpringBootApplication
public class CarfactoryApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarfactoryApplication.class, args);
	}

}
