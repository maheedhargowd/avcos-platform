import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const ScriptContainer = styled.div`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.md};
  margin-top: ${theme.spacing.lg};
`;

const ScriptHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.md};
`;

const ScriptTitle = styled.h3`
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
`;

const ScriptContent = styled.div`
  background: ${theme.colors.surfaceElevated};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  min-height: 200px;
  max-height: 500px;
  overflow-y: auto;
  color: ${theme.colors.text.secondary};
  line-height: 1.8;
  white-space: pre-wrap;
  font-size: 0.9375rem;
`;

const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  color: ${theme.colors.text.tertiary};
  font-style: italic;
`;

const ScriptBlock = ({ script, onRetry, isLoading }) => {
  return (
    <ScriptContainer>
      <ScriptHeader>
        <ScriptTitle>Generated Script</ScriptTitle>
        {script && (
          <Button onClick={onRetry} disabled={isLoading}>
            {isLoading ? 'Regenerating...' : '↻ Regenerate'}
          </Button>
        )}
      </ScriptHeader>
      <ScriptContent>
        {script ? (
          script
        ) : (
          <EmptyState>
            Generate a script to see it here...
          </EmptyState>
        )}
      </ScriptContent>
    </ScriptContainer>
  );
};

ScriptBlock.propTypes = {
  script: PropTypes.string,
  onRetry: PropTypes.func,
  isLoading: PropTypes.bool,
};

ScriptBlock.defaultProps = {
  script: null,
  onRetry: null,
  isLoading: false,
};

export default ScriptBlock;

