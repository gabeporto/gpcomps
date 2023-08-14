import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
`;

interface SectionProps {
  backgroundColor: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ backgroundColor, children }) => {
  const sectionStyles = {
    backgroundColor: backgroundColor,
  };

  return <StyledSection style={sectionStyles}>{children}</StyledSection>;
};

export default Section;
