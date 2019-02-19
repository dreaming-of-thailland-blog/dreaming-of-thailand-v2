import React from 'react';
import styled from 'styled-components';

const GrayBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 199;
`;

const BackDrop = props => (
  <GrayBackDrop onClick={props.click} />
);

export default BackDrop;
