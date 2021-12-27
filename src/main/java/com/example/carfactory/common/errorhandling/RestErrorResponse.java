package com.example.carfactory.common.errorhandling;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class RestErrorResponse {
    private String timestamp;
    private int status;
    private String message;
    private String errorType;
    private String trace;
    private String path;
}
