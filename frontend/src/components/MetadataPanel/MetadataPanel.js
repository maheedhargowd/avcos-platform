import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const PanelContainer = styled.div`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.md};
  margin-top: ${theme.spacing.lg};
`;

const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
  padding: ${theme.spacing.sm} 0;
`;

const PanelTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin: 0;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const ToggleIcon = styled.span`
  font-size: 1rem;
  transition: transform 0.2s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const PanelContent = styled.div`
  max-height: ${props => props.isOpen ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding-top: ${props => props.isOpen ? theme.spacing.md : '0'};
`;

const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.md};
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.xs};
`;

const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: ${theme.colors.surfaceElevated};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  color: ${theme.colors.text.primary};
  font-size: 0.9375rem;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${theme.colors.accent.primary};
  }

  &::placeholder {
    color: ${theme.colors.text.tertiary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: ${theme.colors.surfaceElevated};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  color: ${theme.colors.text.primary};
  font-size: 0.9375rem;
  min-height: 80px;
  resize: vertical;
  transition: border-color 0.2s ease;
  font-family: inherit;

  &:focus {
    border-color: ${theme.colors.accent.primary};
  }

  &::placeholder {
    color: ${theme.colors.text.tertiary};
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-top: ${theme.spacing.xs};
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background: ${theme.colors.surfaceElevated};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};
  font-size: 0.8125rem;
  color: ${theme.colors.text.secondary};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.lg};
`;

const Button = styled.button`
  flex: 1;
  padding: ${theme.spacing.md};
  font-size: 0.9375rem;
  font-weight: 600;
  border-radius: ${theme.borderRadius.md};
  transition: all 0.2s ease;

  &.primary {
    background: ${theme.colors.accent.primary};
    color: ${theme.colors.text.primary};

    &:hover {
      background: ${theme.colors.accent.primaryHover};
    }
  }

  &.secondary {
    background: ${theme.colors.surfaceElevated};
    color: ${theme.colors.text.secondary};
    border: 1px solid ${theme.colors.border};

    &:hover {
      color: ${theme.colors.text.primary};
      border-color: ${theme.colors.accent.primary};
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;

const MetadataPanel = ({ metadata, onSave, onShare }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: metadata?.title || '',
    description: metadata?.description || '',
    tags: metadata?.tags || [],
    keywords: metadata?.keywords || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(formData);
    }
  };

  const handleShare = () => {
    if (onShare) {
      onShare(formData);
    }
  };

  return (
    <PanelContainer>
      <PanelHeader 
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls="metadata-content"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        <PanelTitle>
          <ToggleIcon isOpen={isOpen} aria-hidden="true">▼</ToggleIcon>
          Metadata
        </PanelTitle>
      </PanelHeader>
      <PanelContent id="metadata-content" isOpen={isOpen}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter video title..."
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter video description..."
            rows={3}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="keywords">Keywords</Label>
          <Input
            id="keywords"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            placeholder="Enter keywords separated by commas..."
          />
        </FormGroup>

        {formData.tags.length > 0 && (
          <FormGroup>
            <Label>Tags</Label>
            <TagsContainer>
              {formData.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagsContainer>
          </FormGroup>
        )}

        <ButtonGroup>
          <Button className="secondary" onClick={handleShare}>
            Share
          </Button>
          <Button className="primary" onClick={handleSave}>
            Save
          </Button>
        </ButtonGroup>
      </PanelContent>
    </PanelContainer>
  );
};

MetadataPanel.propTypes = {
  metadata: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    keywords: PropTypes.string,
  }),
  onSave: PropTypes.func,
  onShare: PropTypes.func,
};

MetadataPanel.defaultProps = {
  metadata: {},
  onSave: null,
  onShare: null,
};

export default MetadataPanel;

