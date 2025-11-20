package com.example.my_spring_app.models;

import java.time.LocalDateTime;

public class VideoResponse {
    private String videoUrl;
    private String status;
    private LocalDateTime generatedAt;
    private String style;
    private String duration;

    // Constructors
    public VideoResponse() {
        this.generatedAt = LocalDateTime.now();
    }

    public VideoResponse(String videoUrl, String status, String style, String duration) {
        this.videoUrl = videoUrl;
        this.status = status;
        this.style = style;
        this.duration = duration;
        this.generatedAt = LocalDateTime.now();
    }

    // Getters and Setters
    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getGeneratedAt() {
        return generatedAt;
    }

    public void setGeneratedAt(LocalDateTime generatedAt) {
        this.generatedAt = generatedAt;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }
}

