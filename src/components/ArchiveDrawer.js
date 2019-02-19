import React from 'react';
import styled from 'styled-components';
import Archive from '../components/archive';

const ArchiveSideDrawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  
  
  width: 300px;

  .drawer-closed {
    display: none;
  }
`;

const ArchiveDrawer = props => {


  return (
    <div>
      <Archive />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veniam laborum itaque ut in cumque suscipit enim, alias ducimus dicta sapiente esse velit. Quis quia fuga, omnis adipisci delectus quo.
    </div>
  );
}

export default ArchiveDrawer;
