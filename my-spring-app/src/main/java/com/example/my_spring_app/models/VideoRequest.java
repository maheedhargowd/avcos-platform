package com.example.my_spring_app.models;

import jakarta.validation.constraints.NotBlank;

public class VideoRequest {
    
    @NotBlank(message = "Script is required")
    private String script;
    
    @NotBlank(message = "Style is required")
    private String style;
    
    @NotBlank(message = "Duration is required")
    private String duration;

    // Constructors
    public VideoRequest() {}

    public VideoRequest(String script, String style, String duration) {
        this.script = script;
        this.style = style;
        this.duration = duration;
    }

    // Getters and Setters
    public String getScript() {
        return script;
    }

    public void setScript(String script) {
        this.script = script;
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

