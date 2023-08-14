import React, { useState } from 'react';
import styled from 'styled-components';
import { FaYoutube, FaInstagram } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: relative;
  background-color: #181717;
  color: #fff;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 510px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoImage = styled.img`
  height: auto;
  max-height: 150px;
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 1rem;

  @media (max-width: 510px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? '150px' : '60px')};
    left: 0;
    background-color: #444;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const YouTubeIcon = styled(FaYoutube)`
  text-transform: uppercase;
  font-family: 'Alata', sans-serif;
  font-size: 16px;
  text-decoration: none;
  color: #fff;
  margin-right: 20px;
  transition: color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #BBBBBB; 
  }
`;

const InstagramIcon = styled(FaInstagram)`
  text-transform: uppercase;
  font-family: 'Alata', sans-serif;
  font-size: 16px;
  text-decoration: none;
  color: #fff;
  margin-right: 20px;
  transition: color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #BBBBBB; 
  }
`;

const MenuButton = styled.button<{ isOpen: boolean }>`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 510px) {
    display: none;
  }

  position: absolute;
  top: ${({ isOpen }) => (isOpen ? '75px' : '75px')}; 
  right: 4rem;
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <LogoImage src={process.env.PUBLIC_URL + '/assets/gpcomps.png'} alt="GPcomps Logo" />
        </Logo>
        <MenuButton onClick={toggleMenu} isOpen={isOpen}>
          {isOpen ? '✕' : '☰'}
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <a href="https://www.youtube.com/@gpcomps" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon size={25}/>
          </a>
          <a href="https://www.instagram.com/gp.comps" target="_blank" rel="noopener noreferrer">
          <InstagramIcon size={25}/>
          </a>
        </NavLinks>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
