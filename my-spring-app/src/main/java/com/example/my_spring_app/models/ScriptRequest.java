package com.example.my_spring_app.models;

import jakarta.validation.constraints.NotBlank;

public class ScriptRequest {
    
    @NotBlank(message = "Topic is required")
    private String topic;
    
    @NotBlank(message = "Duration is required")
    private String duration;
    
    @NotBlank(message = "Tone is required")
    private String tone;

    // Constructors
    public ScriptRequest() {}

    public ScriptRequest(String topic, String duration, String tone) {
        this.topic = topic;
        this.duration = duration;
        this.tone = tone;
    }

    // Getters and Setters
    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getTone() {
        return tone;
    }

    public void setTone(String tone) {
        this.tone = tone;
    }
}
