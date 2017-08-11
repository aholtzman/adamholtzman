import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  font-size: 50px;
  text-align: center;
  padding: 30px;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  outline: 0;
  color: #303030;
`

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
  margin-top: 30px;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  justify-self: center;
  align-self: start;
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 550px;
  object-fit: contain;
`

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = { currentIndex: 0 }

    this.findNext = this.findNext.bind(this)
    this.findPrev = this.findPrev.bind(this)

  }

  findNext(e) {
    e.preventDefault();
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex +1
    }))
  }

  findPrev(e) {
    e.preventDefault();
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex -1
    }))
  }

  render() {
    let imageUrls = this.props.data.map((data) => {
      return data.image;
    })
    let hasNext = this.state.currentIndex +1 < imageUrls.length;
    let hasPrev = this.state.currentIndex > 0;

    return(
      <Div data={this.props.data}>
        { hasPrev && <Button onClick={this.findPrev}>&lsaquo;</Button> }
        <Image src={imageUrls[this.state.currentIndex]} alt=''/>
        { hasNext && <Button  onClick={this.findNext}>&rsaquo;</Button>}
      </Div>
    );
  }
}
