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

  @media (max-width: 1024px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    margin-top: 10px;
  }
`

const Logo = () => {
  return(
    <FullName>
      <Name />
    </FullName>
  );
}

export default Logo
