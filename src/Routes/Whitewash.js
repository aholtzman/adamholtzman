import React, { Component } from 'react'
import data from '../images/wash/data'
import Gallery from '../components/Gallery'
import Logo from '../components/Logo'
import Container from '../components/GridContainer'

class Whitewash extends Component {
  constructor(props) {
    super(props);
    this.state = {}
}

  render() {
    return(
      <div>
      <Container>
        <Gallery data={data}/>
        <Logo />
      </Container>
      </div>
    );
  }
}

export default Whitewash
