import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const postArchiveQuery = graphql`
    query BlogPostArchive {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMM DD, YYYY")
              slug
              cover {
                id
                childImageSharp {
                  fixed(width: 75, height: 75) {
                      ...GatsbyImageSharpFixed_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }`;

const ArchiveList = styled.ul`
  padding: auto 10vh;
  margin: 0;
  list-style: none;
  a {
    font-family: helvetica;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`;

const Archive = () => (
  <StaticQuery
    query={postArchiveQuery}
    render={({ allMarkdownRemark }) => (
      <>
        <h3>Archive</h3>
        <ArchiveList>
          {allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`/posts${edge.node.frontmatter.slug}`}>
                <h3>{edge.node.frontmatter.date} - {edge.node.frontmatter.title} </h3>
                <Img fixed={edge.node.frontmatter.cover.childImageSharp.fixed} />
              </Link>
            </li>
          ))}
        </ArchiveList>
      </>
    )}
  />
);

export default Archive;
