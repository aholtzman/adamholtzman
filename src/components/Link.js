import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Link = styled(NavLink)`
  text-decoration: none;
  color: dimgrey;

  ${props => props.primary && css`
    color: white;
    `}
`

export default Link
