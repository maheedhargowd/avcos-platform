import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Spinner } from '../Loading';

const VideoContainer = styled.div`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.md};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const VideoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.md};
`;

const VideoTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin: 0;
`;

const Button = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: ${theme.colors.surfaceElevated};
  color: ${theme.colors.text.secondary};
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: ${theme.borderRadius.md};
  border: 1px solid ${theme.colors.border};
  transition: all 0.2s ease;

  &:hover {
    background: ${theme.colors.surfaceElevated};
    color: ${theme.colors.text.primary};
    border-color: ${theme.colors.accent.primary};
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const VideoWrapper = styled.div`
  flex: 1;
  background: ${theme.colors.surfaceElevated};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  position: relative;
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ThumbnailPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.md};
  color: ${theme.colors.text.tertiary};
`;

const ThumbnailIcon = styled.div`
  width: 80px;
  height: 80px;
  border: 2px dashed ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const VideoBlock = ({ videoUrl, thumbnailUrl, isLoading, onRetry }) => {
  return (
    <VideoContainer>
      <VideoHeader>
        <VideoTitle>Video Preview</VideoTitle>
        {(videoUrl || thumbnailUrl) && (
          <Button onClick={onRetry} disabled={isLoading}>
            {isLoading ? 'Regenerating...' : '↻ Regenerate'}
          </Button>
        )}
      </VideoHeader>
      <VideoWrapper>
        {isLoading ? (
          <Spinner size="50px" text="Generating video..." />
        ) : videoUrl ? (
          <VideoPlayer controls src={videoUrl} aria-label="Generated video preview">
            Your browser does not support the video tag.
          </VideoPlayer>
        ) : thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt="Video thumbnail"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        ) : (
          <ThumbnailPlaceholder>
            <ThumbnailIcon role="img" aria-label="Video placeholder">🎬</ThumbnailIcon>
            <p>Video preview will appear here</p>
          </ThumbnailPlaceholder>
        )}
      </VideoWrapper>
    </VideoContainer>
  );
};

VideoBlock.propTypes = {
  videoUrl: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  isLoading: PropTypes.bool,
  onRetry: PropTypes.func,
};

VideoBlock.defaultProps = {
  videoUrl: null,
  thumbnailUrl: null,
  isLoading: false,
  onRetry: null,
};

export default VideoBlock;

