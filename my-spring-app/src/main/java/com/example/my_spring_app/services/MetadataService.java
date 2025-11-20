package com.example.my_spring_app.services;

import org.springframework.stereotype.Service;

import com.example.my_spring_app.models.MetadataRequest;
import com.example.my_spring_app.models.MetadataResponse;

import java.util.Arrays;
import java.util.List;

/**
 * Service class for metadata generation.
 * Currently mocks OpenAI API call. Ready for integration with real OpenAI API.
 */
@Service
public class MetadataService {

    /**
     * Generates metadata based on the provided request.
     * This method currently returns a mock response.
     * 
     * TODO: Replace mock implementation with actual OpenAI API integration:
     * 1. Add OpenAI client dependency (e.g., openai-java library)
     * 2. Configure API key via application.properties
     * 3. Replace mockGenerateMetadata() with actual API call
     * 4. Use GPT-4 or GPT-3.5-turbo to generate title, description, tags, keywords, etc.
     * 
     * @param metadataRequest The request containing script, videoUrl, and optional tags
     * @return MetadataResponse containing generated metadata
     */
    public MetadataResponse generateMetadata(MetadataRequest metadataRequest) {
        // Mock OpenAI API call - returns dummy metadata
        MetadataResponse response = mockGenerateMetadata(metadataRequest);
        response.setVideoUrl(metadataRequest.getVideoUrl());
        
        return response;
    }

    /**
     * Mocks an OpenAI API call for metadata generation.
     * Replace this method with actual OpenAI API integration.
     * 
     * Example OpenAI integration:
     * 
     * OpenAIService openAIService = new OpenAIService(apiKey);
     * 
     * // Generate title
     * CompletionRequest titleRequest = CompletionRequest.builder()
     *     .model("gpt-3.5-turbo")
     *     .prompt("Generate a compelling title for a video with this script: " + script)
     *     .maxTokens(50)
     *     .build();
     * String title = openAIService.createCompletion(titleRequest).getChoices().get(0).getText();
     * 
     * // Generate description
     * CompletionRequest descRequest = CompletionRequest.builder()
     *     .model("gpt-3.5-turbo")
     *     .prompt("Generate a SEO-friendly description for a video with this script: " + script)
     *     .maxTokens(200)
     *     .build();
     * String description = openAIService.createCompletion(descRequest).getChoices().get(0).getText();
     * 
     * // Generate tags and keywords
     * CompletionRequest tagsRequest = CompletionRequest.builder()
     *     .model("gpt-3.5-turbo")
     *     .prompt("Extract relevant tags and keywords from this script: " + script)
     *     .maxTokens(100)
     *     .build();
     * String tagsResponse = openAIService.createCompletion(tagsRequest).getChoices().get(0).getText();
     * List<String> tags = parseTags(tagsResponse);
     * 
     * // Generate category
     * CompletionRequest categoryRequest = CompletionRequest.builder()
     *     .model("gpt-3.5-turbo")
     *     .prompt("Categorize this video script: " + script)
     *     .maxTokens(20)
     *     .build();
     * String category = openAIService.createCompletion(categoryRequest).getChoices().get(0).getText();
     */
    private MetadataResponse mockGenerateMetadata(MetadataRequest request) {
        String script = request.getScript();
        
        // Extract a simple title from script (first line or first 50 chars)
        String title = script.length() > 50 
            ? script.substring(0, 47) + "..." 
            : script;
        title = title.split("\n")[0].trim();
        
        // Generate mock description
        String description = String.format(
            "This video explores the topic: %s. " +
            "A comprehensive and engaging presentation that covers key insights and valuable information. " +
            "Perfect for viewers interested in this subject matter.",
            title
        );
        
        // Use tags from request or generate default ones
        List<String> tags;
        if (request.getTags() != null && !request.getTags().isEmpty()) {
            tags = request.getTags();
        } else {
            tags = Arrays.asList("video", "content", "education", "entertainment");
        }
        
        // Generate keywords based on script content
        List<String> keywords = extractKeywords(script);
        
        // Determine category based on script content
        String category = determineCategory(script);
        
        // Generate mock thumbnail URL
        String thumbnailUrl = request.getVideoUrl().replace(".mp4", "_thumbnail.jpg");
        
        MetadataResponse response = new MetadataResponse();
        response.setTitle(title);
        response.setDescription(description);
        response.setTags(tags);
        response.setKeywords(keywords);
        response.setCategory(category);
        response.setThumbnailUrl(thumbnailUrl);
        
        return response;
    }

    /**
     * Extracts keywords from script content (mock implementation).
     * In real implementation, use NLP or OpenAI to extract meaningful keywords.
     */
    private List<String> extractKeywords(String script) {
        // Simple keyword extraction (mock)
        List<String> commonKeywords = Arrays.asList(
            "video", "content", "tutorial", "guide", "tips", "insights"
        );
        
        // In real implementation, use OpenAI or NLP library to extract keywords
        return commonKeywords;
    }

    /**
     * Determines category based on script content (mock implementation).
     * In real implementation, use OpenAI to classify the content.
     */
    private String determineCategory(String script) {
        String lowerScript = script.toLowerCase();
        
        // Simple category determination (mock)
        if (lowerScript.contains("tutorial") || lowerScript.contains("how to")) {
            return "Tutorial";
        } else if (lowerScript.contains("review") || lowerScript.contains("analysis")) {
            return "Review";
        } else if (lowerScript.contains("news") || lowerScript.contains("update")) {
            return "News";
        } else {
            return "General";
        }
    }
}

