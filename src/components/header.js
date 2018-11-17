import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

// import riceField from '../images/rice-field.jpg';

const HeaderWrapper = styled.div`
  background: #000000;
  img {
    margin-bottom: 0;
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
`;

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <NavContainer>
        <Link
          to="/"
        >home
        </Link>
        <Link
          to="/about"
        >
          about
        </Link>
        <Link
          to="/about"
        >
          third
        </Link>

      </NavContainer>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header
