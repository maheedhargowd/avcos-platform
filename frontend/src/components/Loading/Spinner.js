import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.xl};
`;

const SpinnerCircle = styled.div`
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  border: 3px solid ${theme.colors.border};
  border-top-color: ${theme.colors.accent.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const SpinnerText = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 0.875rem;
  margin: 0;
`;

const Spinner = ({ size, text, ...props }) => {
  return (
    <SpinnerContainer {...props}>
      <SpinnerCircle size={size} />
      {text && <SpinnerText>{text}</SpinnerText>}
    </SpinnerContainer>
  );
};

Spinner.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
};

export default Spinner;

