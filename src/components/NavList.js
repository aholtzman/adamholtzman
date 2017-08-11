import styled from 'styled-components'

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 200%;
  color: darkgrey;
  text-align: center;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  justify-self: center;
  align-self: center;
  padding-top: 30px;
  padding-bottom: 50px;

  h2 {
    color: #404040;
  }

  h3 {
    color: dimgrey;
  }

  h4 {
    color: grey;
  }
`

export default NavList
