import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { SplitPane } from './components/SplitPane';
import { InputForm } from './components/InputForm';
import { ScriptBlock } from './components/ScriptBlock';
import { VideoBlock } from './components/VideoBlock';
import { MetadataPanel } from './components/MetadataPanel';

// Mock data generator functions
const generateMockScript = (formData) => {
  return `[SCENE 1 - Opening]

Welcome to this ${formData.tone} exploration of ${formData.topic}. 

In the next ${formData.duration} seconds, we'll dive deep into the fascinating world of this subject, uncovering insights and perspectives that will change how you think about it.

[SCENE 2 - Main Content]

The ${formData.style} approach to understanding ${formData.topic} reveals multiple layers of complexity. Each aspect contributes to a richer understanding of the whole.

Key points to consider:
- First, we examine the foundational elements
- Then, we explore the interconnected relationships
- Finally, we synthesize these insights into actionable knowledge

[SCENE 3 - Conclusion]

As we conclude this journey, remember that ${formData.topic} is not just a concept—it's a living, evolving field that continues to shape our understanding.

Thank you for joining us on this ${formData.tone} exploration.`;
};

function App() {
  const [script, setScript] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [isGeneratingScript, setIsGeneratingScript] = useState(false);
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  const [metadata, setMetadata] = useState({
    title: '',
    description: '',
    tags: [],
    keywords: '',
  });

  const handleScriptGenerate = async (formData) => {
    setIsGeneratingScript(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const generatedScript = generateMockScript(formData);
      setScript(generatedScript);
      setIsGeneratingScript(false);
      
      // Auto-generate video after script is ready
      handleVideoGenerate();
    }, 2000);
  };

  const handleScriptRetry = () => {
    setScript(null);
    setVideoUrl(null);
  };

  const handleVideoGenerate = async () => {
    setIsGeneratingVideo(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Mock video URL (in real app, this would be from API)
      setVideoUrl('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
      setIsGeneratingVideo(false);
      
      // Set default metadata
      setMetadata({
        title: 'Generated Video',
        description: 'A video generated from the script',
        tags: ['video', 'generated', 'avcos'],
        keywords: 'video, generation, script',
      });
    }, 3000);
  };

  const handleVideoRetry = () => {
    setVideoUrl(null);
    handleVideoGenerate();
  };

  const handleMetadataSave = (data) => {
    setMetadata(data);
    console.log('Metadata saved:', data);
    // In real app, this would call an API
  };

  const handleMetadataShare = (data) => {
    console.log('Sharing metadata:', data);
    // In real app, this would open share dialog or call API
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <SplitPane
          leftContent={
            <>
              <InputForm 
                onSubmit={handleScriptGenerate}
                isLoading={isGeneratingScript}
              />
              <ScriptBlock
                script={script}
                onRetry={handleScriptRetry}
                isLoading={isGeneratingScript}
              />
            </>
          }
          rightContent={
            <>
              <VideoBlock
                videoUrl={videoUrl}
                isLoading={isGeneratingVideo}
                onRetry={handleVideoRetry}
              />
              {videoUrl && (
                <MetadataPanel
                  metadata={metadata}
                  onSave={handleMetadataSave}
                  onShare={handleMetadataShare}
                />
              )}
            </>
          }
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
