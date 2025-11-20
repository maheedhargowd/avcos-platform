package com.example.my_spring_app.models;

import jakarta.validation.constraints.NotBlank;
import java.util.List;

public class MetadataRequest {
    
    @NotBlank(message = "Script is required")
    private String script;
    
    @NotBlank(message = "Video URL is required")
    private String videoUrl;
    
    private List<String> tags; // Optional field - accepts JSON array

    // Constructors
    public MetadataRequest() {}

    public MetadataRequest(String script, String videoUrl, List<String> tags) {
        this.script = script;
        this.videoUrl = videoUrl;
        this.tags = tags;
    }

    // Getters and Setters
    public String getScript() {
        return script;
    }

    public void setScript(String script) {
        this.script = script;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }
}

