import React from 'react';
import './App.css';
import Header from './components/Header';
import PageContainer from './components/PageContainer';
import Section from './components/Section';

function App() {
  return (
    <PageContainer>
      <Header />
      <Section backgroundColor='#181717'>Conteúdo da Seção 1</Section>
      <Section backgroundColor='#272727'>Conteúdo da Seção 2</Section>
      <Section backgroundColor='#181717'>Conteúdo da Seção 3</Section>
      <Section backgroundColor='#272727'>Conteúdo da Seção 4</Section>
    </PageContainer>
  );
}

export default App;
