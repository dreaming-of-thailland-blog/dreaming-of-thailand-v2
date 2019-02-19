import React from 'react';
import styled from 'styled-components';
import { ChevronsLeft } from 'react-feather';

const Archive = styled.button`
  background: #212121;
  color: #ffffff;
  position: fixed;
  top: 30vh;
  right: 0px;
  height: 7em;
  width: 2.8em;
  border-radius: 30% 0% 0% 30%;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const ArchiveTab = props => (
  <Archive onClick={props.drawerClickHandler}>
    <ChevronsLeft size={32} />
  </Archive>
);

export default ArchiveTab;
