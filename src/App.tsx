import React from 'react';
import './App.css';
import Header from './components/Header';
import PageContainer from './components/PageContainer';
import Section from './components/Section';
import SubSection from './components/SubSection';

function App() {
  return (
    <PageContainer>
      <Header />
      <Section
        backgroundColor="#181717"
        imageSrc="/assets/art1.png"
        title="Artes da Partida"
        text="💫 Perfeito para aumentar a visibilidade do jogador, promovendo a conexão entre torcedor e atleta."
        marginTop='200px'
        marginBottom='30px'
        imageOnRight={true}
      />
      <SubSection
        backgroundColor="#272727"
        imageSrc="/assets/art2.png"
        title="Compilado da partida"
        text="⚽️ Performance completa do jogador durante cada partida, ótimo para acompanhar performance e exibir o potencial para o mundo."
        padding='100px'
        imageOnRight={false}
      />
      <Section
        backgroundColor="#181717"
        imageSrc="/assets/art3.png"
        title="Material completo"
        text="📀 O mais procurado, o “DVD do Jogador”. O currículo profissional do atleta, essencial para análise dos olheiros e demais profissionais das comissões dos clubes."
        imageOnRight={false}
        marginTop='50px'
        marginBottom='50px'
      />
      <SubSection
        backgroundColor="#272727"
        imageSrc="/assets/gpcomps.png"
        title="Impulsione a sua carreira!"
        text="🚀 Mais de 4 anos trabalhando com atletas de alta performance, entre em contato pelas redes sociais e venha fazer parte do time!"
        imageOnRight={false}
        marginBottom='100px'
      />
    </PageContainer>
  );
}

export default App;
