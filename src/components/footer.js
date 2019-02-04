import React from 'react';
import styled from 'styled-components';
import { GitHub, Linkedin, Mail } from 'react-feather';

const FooterWrapper = styled.footer`
background: #212121;
color: #ffffff;
min-height: 30vh;
display: grid;
grid-template-columns: repeat(3, 1fr);

.grid-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-alignment: center;
  padding-top: 2vh;  
}

@media screen and (min-width: 699px) {
  padding-top: 3vh; 
}
`;

const footer = (props) => {
  return (
    <FooterWrapper>
      <div></div>
      <div></div>
      <div className='grid-links'>
        <a href='https://github.com/vibecastor'><GitHub /></a>
        <a href='https://www.linkedin.com/in/mikecastor'><Linkedin /></a>
        <a href='mailto:vibecastor@gmail.com'><Mail /></a>
      </div>
    </FooterWrapper>
  );
};

export default footer;
