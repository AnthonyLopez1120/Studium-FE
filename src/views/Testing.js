import React, { useState } from 'react';
import styled from 'styled-components';
import StyledInput from '../components/Styled/StyledInput';
import { Form } from 'antd';
import StyledSearchBar from '../components/Styled/StyledSearchBar';
import { uploadPhoto } from '../actions';
import StyledUploader from '../components/Styled/StyledUploader';

const Testing = ( props ) => {
  
  const [ photoID, setPhotoId ] = useState( 1 );
  const [ value, setValue ] = useState( '' );
  
  return ( <StyledTesting>
    <StyledUploader/>
  
  </StyledTesting> );
};

const StyledTesting = styled.div`
  margin: 0 auto;
  width: 400px;
`;

export default Testing;