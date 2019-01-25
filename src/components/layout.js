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
  margin: 1rem auto;
  .grid-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px 10px;
    }  
  }

  @media (min-width: 500px) {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px 10px;
      }
  }

  @media (min-width: 600px) {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px 10px;
      }
  }

  @media (min-width: 700px) {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px 10px;
      }
  }
  
`;

const PostContainer = styled.div`
  background: #e6e6e6;
`;

// do you need to pass in children and location here???
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
          to={{ height: location.pathname === '/' ? 350 : 100 }}
        >
          {styles => (
            <div style={{ overflow: 'hidden', ...styles }}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
          )}
        </Spring>
        {/*{location.pathname === '/' &&*/}
        {/**/}
        {/*}*/}
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

// do you need this???
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
// do you need this???
Layout.defaultProps = {
  location: {},
};

export default Layout;
