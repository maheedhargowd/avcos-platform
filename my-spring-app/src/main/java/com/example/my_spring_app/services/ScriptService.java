package com.example.my_spring_app.services;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.my_spring_app.models.ScriptRequest;

import org.springframework.http.*;

@Service
public class ScriptService {

    public String generateScript(ScriptRequest scriptRequest) {
        // RestTemplate restTemplate = new RestTemplate();

        // // URL of your running Python script agent
        // String apiUrl = "http://localhost:8000/generate-script"; // Adjust for your FastAPI endpoint

        // // Send POST request with ScriptRequest as JSON
        // HttpHeaders headers = new HttpHeaders();
        // headers.setContentType(MediaType.APPLICATION_JSON);
        // HttpEntity<ScriptRequest> request = new HttpEntity<>(scriptRequest, headers);

        // ResponseEntity<String> response = restTemplate.postForEntity(apiUrl, request, String.class);

        // return response.getBody();
        return "Server is Up! Received topic: " + scriptRequest.getTopic();
    }
}
