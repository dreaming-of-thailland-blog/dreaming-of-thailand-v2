import React from 'react';
import Layout from '../components/layout';

// location is for React Spring
const About = ({ location }) => (
  <Layout location={location}>
    <div>
      <h1>
        About this Site
      </h1>
      <p>It's all about Thailand</p>
    </div>
  </Layout>
);

export default About;
