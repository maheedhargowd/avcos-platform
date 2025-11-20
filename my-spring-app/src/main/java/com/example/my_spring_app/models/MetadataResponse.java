package com.example.my_spring_app.models;

import java.time.LocalDateTime;
import java.util.List;

public class MetadataResponse {
    private String title;
    private String description;
    private List<String> tags;
    private List<String> keywords;
    private String category;
    private String thumbnailUrl;
    private LocalDateTime generatedAt;
    private String videoUrl;

    // Constructors
    public MetadataResponse() {
        this.generatedAt = LocalDateTime.now();
    }

    public MetadataResponse(String title, String description, List<String> tags, List<String> keywords, 
                           String category, String thumbnailUrl, String videoUrl) {
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.keywords = keywords;
        this.category = category;
        this.thumbnailUrl = thumbnailUrl;
        this.videoUrl = videoUrl;
        this.generatedAt = LocalDateTime.now();
    }

    // Getters and Setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public List<String> getKeywords() {
        return keywords;
    }

    public void setKeywords(List<String> keywords) {
        this.keywords = keywords;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getThumbnailUrl() {
        return thumbnailUrl;
    }

    public void setThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
    }

    public LocalDateTime getGeneratedAt() {
        return generatedAt;
    }

    public void setGeneratedAt(LocalDateTime generatedAt) {
        this.generatedAt = generatedAt;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }
}

