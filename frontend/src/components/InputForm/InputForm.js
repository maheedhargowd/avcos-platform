import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const FormContainer = styled.div`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.md};
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.text.primary};
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
  min-height: 100px;
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

const Select = styled.select`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: ${theme.colors.surfaceElevated};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  color: ${theme.colors.text.primary};
  font-size: 0.9375rem;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${theme.colors.accent.primary};
  }

  option {
    background: ${theme.colors.surfaceElevated};
    color: ${theme.colors.text.primary};
  }
`;

const Button = styled.button`
  width: 100%;
  padding: ${theme.spacing.md};
  background: ${theme.colors.accent.primary};
  color: ${theme.colors.text.primary};
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${theme.borderRadius.md};
  transition: background-color 0.2s ease;

  &:hover {
    background: ${theme.colors.accent.primaryHover};
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const InputForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    topic: '',
    duration: '60',
    tone: 'professional',
    style: 'modern',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <FormContainer>
      <FormTitle>Generate Script</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="topic">Topic *</Label>
          <TextArea
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            placeholder="Enter the topic or theme for your video script..."
            required
            rows={3}
            aria-required="true"
            aria-describedby="topic-description"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="duration">Duration (seconds)</Label>
          <Select
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          >
            <option value="30">30 seconds</option>
            <option value="60">60 seconds</option>
            <option value="90">90 seconds</option>
            <option value="120">120 seconds</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="tone">Tone</Label>
          <Select
            id="tone"
            name="tone"
            value={formData.tone}
            onChange={handleChange}
          >
            <option value="professional">Professional</option>
            <option value="casual">Casual</option>
            <option value="energetic">Energetic</option>
            <option value="calm">Calm</option>
            <option value="humorous">Humorous</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="style">Style</Label>
          <Select
            id="style"
            name="style"
            value={formData.style}
            onChange={handleChange}
          >
            <option value="modern">Modern</option>
            <option value="classic">Classic</option>
            <option value="minimalist">Minimalist</option>
            <option value="cinematic">Cinematic</option>
          </Select>
        </FormGroup>

        <Button type="submit" disabled={isLoading || !formData.topic.trim()}>
          {isLoading ? 'Generating...' : 'Generate Script'}
        </Button>
      </form>
    </FormContainer>
  );
};

InputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

InputForm.defaultProps = {
  isLoading: false,
};

export default InputForm;

