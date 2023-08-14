import React from 'react';
import './App.css';
import Header from './components/Header';
import PageContainer from './components/PageContainer';
import Section from './components/Section';

function App() {
  return (
    <PageContainer>
      <Header />
      <Section
        backgroundColor="#181717"
        imageSrc="/assets/art1.png"
        title="Artes da Partida"
        text="Perfeito para aumentar a visibilidade do jogador, promovendo a aumento do acompanhamento do atleta pelos torcedores."
        marginTop='200px'
      />
      <Section
        backgroundColor="#272727"
        imageSrc="/assets/art2.png"
        title="Compilados das partidas"
        text="Performance completa do jogador durante a partida, ótimo para acompanhar performance e aumentar a conexão com os torcedores."
        padding='100px'
        
      />
      <Section
        backgroundColor="#181717"
        imageSrc="/assets/art3.png"
        title="Material completo"
        text="O mais procurado, o “DVD do Jogador”. O currículo profissional do atleta, essencial para análise dos olheiros e demais profissionais da comissão dos clubes."
        padding='100px'
      />
      
    </PageContainer>
  );
}

export default App;
