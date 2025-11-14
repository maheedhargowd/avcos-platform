package com.example.my_spring_app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.my_spring_app.models.ScriptRequest;
import com.example.my_spring_app.services.ScriptService;

@RestController
@RequestMapping("/api")
@CrossOrigin // if frontend runs on another port during local dev
public class ScriptController {

    @Autowired
    private ScriptService scriptService;

    @PostMapping("/script")
    public String generateScript(@RequestBody ScriptRequest scriptRequest) {
        return scriptService.generateScript(scriptRequest);
    }
}
