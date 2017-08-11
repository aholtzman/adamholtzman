import React from 'react'
import Link from '../components/Link'
import NavList from '../components/NavList'
import Logo from '../components/Logo'
import Container from '../components/GridContainer'

const Photographs = () => {
  return(
    <Container>
      <NavList>
      <h2>photographs</h2>
        <Link to='/BlackMirror'>Black Mirror (2015)</Link>
        <Link to='/RIPB'>RI Picture Book (or Fuck Rainbows) (2015)</Link>
        <Link to='/pages'>Compositions (2014)</Link>
        <Link to='/poles'>Poles/Lost Messages (2014)</Link>
        <Link to='/surfaces'>Surfaces (2014)</Link>
        <Link to='/inBlue'>In Blue (2013)</Link>
        <Link to='/StillLife'>Still Life (2006-2010)</Link>
        <Link to='/self'>Self Portraits (2006)</Link>
        <Link to='/absence'>Absence (2005)</Link>
        <Link to='/landscapes'>Scratches/Landscapes (2004)</Link>
        <Link to='/deconstruction'> Deconstruction (2002/03)</Link>
        <Link to='/ink'>Ink/Abstractions (2003)</Link>
        <Link to='/Undone'>Undone (2003)</Link>
      </NavList>
      <Logo />
    </Container>
  );
}

export default Photographs
