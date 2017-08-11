import React from 'react'
import Link from '../components/Link'
import NavList from '../components/NavList'
import Logo from '../components/Logo'
import Container from '../components/GridContainer'

const Artworks = () => {
  return(
    <Container>
      <NavList>
        <h2>artworks</h2>
        <Link to='/shadows'>Shadows (2017)</Link>
        <Link to='/whitewash'>Whitewash (2015)</Link>
        <Link to='/mirrors'>Mirror (2015)</Link>
        <Link to='/layers'>Layered (2014)</Link>
      </NavList>
      <Logo />
    </Container>
  );
}

export default Artworks
