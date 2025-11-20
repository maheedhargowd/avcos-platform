package com.example.my_spring_app.models;

import java.time.LocalDateTime;

public class ScriptResponse {
    private String script;
    private String topic;
    private String duration;
    private String tone;
    private LocalDateTime generatedAt;

    // Constructors
    public ScriptResponse() {
        this.generatedAt = LocalDateTime.now();
    }

    public ScriptResponse(String script, String topic, String duration, String tone) {
        this.script = script;
        this.topic = topic;
        this.duration = duration;
        this.tone = tone;
        this.generatedAt = LocalDateTime.now();
    }

    // Getters and Setters
    public String getScript() {
        return script;
    }

    public void setScript(String script) {
        this.script = script;
    }

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

    public LocalDateTime getGeneratedAt() {
        return generatedAt;
    }

    public void setGeneratedAt(LocalDateTime generatedAt) {
        this.generatedAt = generatedAt;
    }
}

