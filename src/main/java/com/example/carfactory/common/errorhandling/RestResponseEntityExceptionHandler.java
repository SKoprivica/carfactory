package com.example.carfactory.common.errorhandling;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;

@RestControllerAdvice
public class RestResponseEntityExceptionHandler {


    @ExceptionHandler(Exception.class)
    public ResponseEntity<RestErrorResponse> handle(Exception ex) {

        return new ResponseEntity<>(
                RestErrorResponse
                        .builder()
                        .message(ex.getMessage())
                        .timestamp(OffsetDateTime.now().format(DateTimeFormatter.ISO_OFFSET_DATE_TIME))
                        .status(HttpStatus.BAD_REQUEST.value())
                        .trace(Arrays.toString(ex.getStackTrace()))
                        .build()
                ,
                HttpStatus.BAD_REQUEST);
    }


}
