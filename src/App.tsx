import React from 'react';
import styled from 'styled-components';
import './App.css';

const StyledHeader = styled.header`
  background-color: #1838;
  color: #fff;
  text-align: center;
  padding: 2rem;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  margin: 0.5rem 0;
`;

function App() {
  return (
    <div className="App">
      <StyledHeader>
        <StyledTitle>GPcomps</StyledTitle>
        <p>Conheça os serviços que oferecemos:</p>
        <StyledList>
          <StyledListItem>Serviço 1</StyledListItem>
          <StyledListItem>Serviço 2</StyledListItem>
          <StyledListItem>Serviço 3</StyledListItem>
        </StyledList>
      </StyledHeader>
    </div>
  );
}

export default App;
