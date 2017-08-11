import styled from 'styled-components'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = styled(NavLink)`
  text-decoration: none;
`

const Div = styled.div`
  line-height: 10%;
`

const FirstName = styled.h2`
  color: grey;
`

const LastName = styled.h2`
  padding-left: 12px;
  color: silver;
`

const Name = () => {
  return(
    <Div>
      <Link to='/'>
      <FirstName>adam</FirstName>
      <LastName>holtzman</LastName>
      </Link>
    </Div>
  );
}

export default Name
