import styled from 'styled-components'
import React from 'react'
import Name from './Name'

const FullName = styled.div`
grid-column-start: 3;
grid-column-end: 4;
grid-row-start: 3;
grid-row-end: 4;
justify-self: center;
align-self: center;
margin-top: -40px;
`

const Logo = () => {
  return(
    <FullName>
      <Name />
    </FullName>
  );
}

export default Logo
