package com.example.carfactory.configuration;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Getter
@Setter
@ConfigurationProperties(ignoreUnknownFields = true)
public class CarFactoryConfiguration {
}
