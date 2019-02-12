import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/layout';

const AboutTitle = styled.h1`
  margin-left: .5rem;
  font-family: Lora;
`;

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;

  @media screen and (min-width: 599px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
`;

const GridItem = styled.article`
  display: grid;
  font-family: Lora;
  max-width: 400px;
  padding: 1rem;
  margin-top: .1rem;
  margin-left: .5rem;
  margin-right: .5rem;
  box-shadow: 0px 8px 15px rgba(192, 192, 192, 0.3);

`;

const GridText = styled.p`
  margin-left: .5rem;
  margin-right: .5rem;
  font-family: Karma;
  font-size: 1.2rem;
  line-height: 1.5rem;
`;

// took out location is for React Spring
class About extends Component {

  render() {
    const { data } = this.props;
    return (
      <Layout>
        <AboutTitle>...Sawatdee Krap</AboutTitle>
        <AboutWrapper>
          <GridItem>
            <h2>Mike Castor</h2>
            <Img fluid={data.mikeImage.childImageSharp.fluid} />
            <GridText>
              As an westerner, Thailand can be quite inviting and easy to navigate.  So inviting in fact that it can be easy to miss the real experiences.  But if you step off the beaten tourist path, try the street food and open up your mind to new friendships, it can transform a simple vacation into the journey of a lifetime.
            </GridText>
          </GridItem>
          <GridItem>
            <h2>Cher Norraket</h2>
            <Img fluid={data.cherImage.childImageSharp.fluid} />
            <GridText>
              Special thanks to my lovely guide, Cher, who acted as a guide and translator throughout our journeys.  Thanks to her, I have been lucky enough to experience Thailand through the eyes of a Thai returning home and not just that of a tourist.  Visiting the homes of family and friends while enjoying the freedom that comes when the language barrier is not in place has made these journeys remarkable.  I learned about family, friendship and that the best parts of traveling can be who you meet along the way and not just what you get to see and experience.
            </GridText>
          </GridItem>
        </AboutWrapper>
      </Layout>
    );
  }
}

export const query = graphql`
query  {
      mikeImage: file(relativePath: { regex: "/about/mike-chiang-rai-street-photographer.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      cherImage: file(relativePath: { regex: "/about/cher-selfie-stick.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
`

export default About;
