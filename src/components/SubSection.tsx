// src/components/Section.tsx
import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.div<{ backgroundColor: string, marginTop?: string, marginBottom?: string}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: ${props => props.backgroundColor};
  color: #fff;
  margin-top: ${props => props.marginTop || 0};
  margin-bottom: ${props => props.marginBottom || 0};
`;

const SectionContent = styled.div<{padding?: string}>`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.padding || 0};
`;

const SectionImage = styled.img<{imageOnRight?: boolean}>`
  width: 65%;
  max-width: 1000px;
`;

const SectionText = styled.div`
  width: 60%;
  padding-left: 2rem;
  color: #CBC8C8;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #FFF;
`;

interface SectionProps {
  backgroundColor: string;
  imageSrc: string;
  title: string;
  text: string;
  marginTop?: string;
  marginBottom?: string;
  padding?: string;
  imageOnRight?: boolean;
}

const SubSection: React.FC<SectionProps> = ({ backgroundColor, imageSrc, title, text, marginTop, marginBottom, padding, imageOnRight }) => {
  return (
    <StyledSection backgroundColor={backgroundColor} marginTop={marginTop} marginBottom={marginBottom}>
      <SectionContent padding={padding}>
        <SectionImage src={imageSrc} alt="Imagem" imageOnRight={imageOnRight}/>
        <SectionText>
          <SectionTitle>{title}</SectionTitle>
          <p>{text}</p>
        </SectionText>
      </SectionContent>
    </StyledSection>
  );
};

export default SubSection;