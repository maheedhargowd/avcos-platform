package com.example.my_spring_app.models;

public class ScriptRequest {
    private String topic;
    private String duration;
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
