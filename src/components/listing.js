import React from 'react'
import styled from 'styled-components';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Post = styled.article`
  box-shadow: 0px 8px 15px rgba(25, 16, 34, 0.05);
  padding: 1rem;
  border-radius: 7px;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
  h2 {
    font-size: 1rem;
    margin-bottom: 0;
  }
  p {
    font-size: 0.8rem;
  }
  .read-more {
    font-family: helvetica;
    font-size: 0.75rem;
    text-decoration: underline;
    color: #000000;
  }
`;

const LISTING_QUERY = graphql`
    query BlogPostListing {
        allMarkdownRemark(limit: 10, sort: {
            order: DESC,
            fields: [frontmatter___date]
        }) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        slug
                        cover {
                            id
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                    ...GatsbyImageSharpFluid_tracedSVG
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

const Listing = (data) => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) => (
      allMarkdownRemark.edges.map(({ node }) => (
        <Post key={node.frontmatter.slug}>
          <Link to={`/posts${node.frontmatter.slug}`}>
            <div>
              <Img
                fluid={node.frontmatter.cover.childImageSharp.fluid}
              />
            </div>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          {/*<p>{node.frontmatter.date}</p>*/}

          {/*<p>{node.excerpt}</p>*/}
          <Link className='read-more' to={`/posts${node.frontmatter.slug}`}>Read More...</Link>
        </Post>
      ))
    )}
  />
);

export default Listing;
