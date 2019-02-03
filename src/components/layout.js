import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image';
import { Spring } from 'react-spring';
import Helmet from 'react-helmet'
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
// import Archive from './archive';
// import './layout.css'
import 'normalize.css/normalize.css';

const MainLayout = styled.main`
  max-width: 100%;
  margin: .1rem auto;
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 12px 12px;
    }  
  }
}
`;


// @media (min-width: 500px) {
//   .grid-container {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     grid-gap: 10px 10px;
//     }
// }

// @media (min-width: 600px) {
//   .grid-container {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     grid-gap: 10px 10px;
//     }
// }

// @media (min-width: 700px) {
//   .grid-container {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     grid-gap: 10px 10px;
//     }

const PostContainer = styled.div`
  padding: 1vh;

  h1 {
    font-size: 1.5rem;
  }

  .post-body {
    box-shadow: 0px 8px 15px rgba(192, 192, 192, 0.3);
    padding: auto 10vh auto 10vh;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 5vh 5vh;
  }

  .post-links {
    display: flex;
    justify-content: space-between;

    .icon {
      font-size: 5rem;
    }

    a {
      font-size: 2rem;
      text-decoration: none;
      color: #000000;
    }
  }

  @media screen and (min-width: 599px) {
    .post-body {
      box-shadow: 0px 8px 15px rgba(192, 192, 192, 0.3);
      padding: auto 10vh auto 10vh;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 5vh 5vh;
    }

    @media screen and (min-width: 699px) {
      .post-body {
        box-shadow: 0px 8px 15px rgba(192, 192, 192, 0.3);
        padding: auto 10vh auto 10vh;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 5vh 5vh;
      }
  }

`;

// passing in location for React Spring Animation
const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
          file(relativePath: {
            regex: "/rice-field/"
            }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
               ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: data.site.siteMetadata.title,
              content: data.site.siteMetadata.description,
            },
            { name: 'Thailand, Photography, Travel', content: 'Travel Photography' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Spring
          from={{ height: location.pathname === '/' ? 100 : 350 }}
          to={{ height: location.pathname === '/' ? 350 : 200 }}
        >
          {styles => (
            <div style={{ overflow: 'hidden', ...styles }}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
          )}
        </Spring>
        <MainLayout>
          {location.pathname === '/' ?
            <div className='grid-container'>
              {children}
            </div>
            : <PostContainer className='post-container'>
              {children}
            </PostContainer>}
        </MainLayout>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
// Providing a default prop for location during the build process
Layout.defaultProps = {
  location: {},
};

export default Layout;
