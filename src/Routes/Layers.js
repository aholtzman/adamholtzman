import React, { Component } from 'react'
import data from '../images/layers/data'
import Gallery from '../components/Gallery'
import Logo from '../components/Logo'
import Container from '../components/GridContainer'

class Layers extends Component {
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

export default Layers
