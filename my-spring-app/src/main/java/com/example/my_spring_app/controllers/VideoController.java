package com.example.my_spring_app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.my_spring_app.models.VideoRequest;
import com.example.my_spring_app.models.VideoResponse;
import com.example.my_spring_app.services.VideoService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin // if frontend runs on another port during local dev
public class VideoController {

    @Autowired
    private VideoService videoService;

    @PostMapping("/generate-video")
    public ResponseEntity<VideoResponse> generateVideo(@Valid @RequestBody VideoRequest videoRequest) {
        VideoResponse response = videoService.generateVideo(videoRequest);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}

