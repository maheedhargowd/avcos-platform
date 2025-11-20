package com.example.my_spring_app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.my_spring_app.models.ScriptRequest;
import com.example.my_spring_app.models.ScriptResponse;
import com.example.my_spring_app.services.ScriptService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin // if frontend runs on another port during local dev
public class ScriptController {

    @Autowired
    private ScriptService scriptService;

    @PostMapping("/generate-script")
    public ResponseEntity<ScriptResponse> generateScript(@Valid @RequestBody ScriptRequest scriptRequest) {
        ScriptResponse response = scriptService.generateScript(scriptRequest);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}
