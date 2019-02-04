import React from 'react';
import { Link } from 'gatsby';
import { Camera, Menu } from 'react-feather';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
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
    font-size: 1.8rem;
  }
  h2 {
    padding-left: 1rem;
    font-size: 1rem;
  }

  .icon-camera {
    padding-top: .6rem;
    padding-left: 1rem;
    padding-bottom: 1rem;
  }

  .icon-menu {
    padding-top: .6rem;
    padding-left: 1rem;
    padding-bottom: 1rem;
  }

  .link-grid {
    display: grid;
    grid-template-columns: 2rem auto;
  }

  .mobileNav {
    max-height: 10vh;
    padding-left: 2rem;
    a {
      display: inline;
      vertical-align: top;
    }
  } 

  .desktopNav {
   display: none;   
  }

  @media screen and (min-width: 599px) {
    .icon-menu {
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
            <div className='link-grid'>
              <Camera size={24} className='icon-camera' />
              <h2>travel photography in the land of smiles</h2>
            </div>
            <Menu className='icon-menu' onClick={this.ToggleNav} />
          </div>
          {/* mobile navBar */}
          <div className='mobileNav'>
            {
              this.state.toggle &&
              <NavContainer className='mobileNav'>
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
