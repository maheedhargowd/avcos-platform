package com.example.my_spring_app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.my_spring_app.models.MetadataRequest;
import com.example.my_spring_app.models.MetadataResponse;
import com.example.my_spring_app.services.MetadataService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin // if frontend runs on another port during local dev
public class MetadataController {

    @Autowired
    private MetadataService metadataService;

    @PostMapping("/generate-metadata")
    public ResponseEntity<MetadataResponse> generateMetadata(@Valid @RequestBody MetadataRequest metadataRequest) {
        MetadataResponse response = metadataService.generateMetadata(metadataRequest);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}

