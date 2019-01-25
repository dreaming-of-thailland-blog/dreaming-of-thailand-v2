import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

// import riceField from '../images/rice-field.jpg';

const HeaderWrapper = styled.div`
  background: #000000;
  color: #ffffff;
  img {
    margin-bottom: 0;
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  // max-width: 960px;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1rem;
  }
`;

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <div>
        <h1>Dreaming of Thailand</h1>
        <h2>travel photography in the land of smiles</h2>
      </div>
      <NavContainer>
        <Link
          to="/"
        >home
        </Link>
        <Link
          to="/archivePage"
        >
          archive
        </Link>
        <Link
          to="/about"
        >
          about
        </Link>
      </NavContainer>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header
