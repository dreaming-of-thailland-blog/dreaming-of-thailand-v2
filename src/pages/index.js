import React from 'react'

import Layout from '../components/layout'
import Listing from '../components/listing';

import '../components/layout.css';

// props.location is for React Spring
const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Listing />
  </Layout>
);

export default IndexPage;
