import React from 'react';
import { Link } from 'gatsby';
import { Menu } from 'react-feather';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  //max-height: 15vh;
  background: #212121;
  color: #ffffff;
  img {
    margin-bottom: 0;
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  padding-left: .5rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  a {
    text-decoration: none;
    color: #ffffff;
  }

  h1 {
    padding-left: 1rem;
    font-size: 2rem;
  }
  h2 {
    padding-left: 1.5rem;
    font-size: 1rem;
  }

  .icon {
    padding-left: 1rem;
    padding-bottom: 1rem;
  }

  .mobileNav {
    padding-left: 2rem;
    padding-bottom: 1rem;
  } 

  .desktopNav {
   display: none;   
  }

  @media screen and (min-width: 599px) {
    .icon {
      display: none;
    }
    
    .mobileNav {
      display: none;
    }

    .desktopNav {
      display: grid;   
     }

    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const NavContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    a {
      color: #ffffff;
      font-size: 1.5rem;
      padding-top: 2rem;
    }

    a:hover {
      color: #b30000;
    } 
`;

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };
  }

  ToggleNav = (e) => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <div>
            <Link to='/'>
              <h1>{this.props.siteTitle}</h1>
            </Link>
            <h2>travel photography in the land of smiles</h2>
          </div>
          {/* mobile navBar */}
          <Menu className='icon' onClick={this.ToggleNav} />
          <div className='mobileNav'>
            {
              this.state.toggle &&
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
            }
          </div>
          {/* desktop navBar */}
          <NavContainer className='desktopNav'>
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
  }
}

export default Header
