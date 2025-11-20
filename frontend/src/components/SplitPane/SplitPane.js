import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.lg};
  height: 100%;
  min-height: calc(100vh - 2rem);
  padding: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.md};
    padding: ${theme.spacing.md};
  }
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const SplitPane = ({ leftContent, rightContent }) => {
  return (
    <Container>
      <LeftPanel>{leftContent}</LeftPanel>
      <RightPanel>{rightContent}</RightPanel>
    </Container>
  );
};

SplitPane.propTypes = {
  leftContent: PropTypes.node.isRequired,
  rightContent: PropTypes.node.isRequired,
};

export default SplitPane;

