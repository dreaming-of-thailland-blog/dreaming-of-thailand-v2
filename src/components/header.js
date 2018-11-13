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

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {/*<img*/}
            {/*style={{*/}
              {/*width: '100px',*/}
            {/*}}*/}
            {/*src={riceField}*/}
            {/*alt="Rice Field"*/}
          {/*/>*/}
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header
