import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import { ChevronsLeft, ChevronsRight } from 'react-feather';
import Layout from './layout.js';
// import styled from 'styled-components';

export default class postLayout extends Component {

  render() {
    const { markdownRemark } = this.props.data;
    // location for React Spring
    const { location } = this.props;
    const { next, prev } = this.props.pageContext;
    console.log('next', next);
    console.log('prev', prev);

    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.subtitle}</h1>
        <div className='post-body' dangerouslySetInnerHTML={{
          __html: markdownRemark.html
        }} />
        <div className='post-links'>
          <div>
            {
              next && <Link to={`/posts${next.frontmatter.slug}`}><ChevronsLeft className='icon' size={48} /></Link>
            }
          </div>
          <div>
            {
              prev && <Link to={`/posts${prev.frontmatter.slug}`}><ChevronsRight className='icon' size={48} /></Link>
            }
          </div>
        </div>
      </Layout>
    );
  };
};

// !requires a slug argument which comes in as a string...
export const query = graphql`
  query PostQuery($slug: String!) {
        markdownRemark(frontmatter:
        {slug: {
          eq: $slug
        }
        }) {
          html
            frontmatter {
              title
              subtitle
              date
              slug
            }
          }
  }
`;
