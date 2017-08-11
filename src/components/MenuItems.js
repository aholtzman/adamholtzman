import styled from 'styled-components'

export const Grid = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr 75px 75px 75px 75px 50px 50px 50px 100px 1fr;
  grid-template-columns: 1fr 1fr 150px 150px repeat(2, 75px) repeat(3, 150px) 1fr;

  @media (max-width: 1024px) {
    grid-template-columns: 10px 1fr 150px 150px repeat(2, 75px) repeat(3, 150px) 10px;
    grid-template-rows: 10px 75px 75px 75px 75px 50px 50px 50px 100px 10px;
    overflow: scroll;
  }
`
const Btn = styled.div`
  height: 150px;
  width: 150px;
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PhotoButton = styled(Btn)`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  background-image: url(${require('../images/assets/photoBtn.png')});
`
export const ArtButton = styled(Btn)`
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 3;
  grid-row-end: 5;
  background-image: url(${require('../images/assets/artBtn.png')});
  border: 1px solid white;
`

export const CVButton = styled(Btn)`
  grid-column-start: 5;
  grid-column-end: 7;
  grid-row-start: 8;
  grid-row-end: 10;
  background-image: url(${require('../images/assets/cvBtn.png')});
`
export const DesignButton = styled(Btn)`
  grid-column-start: 8;
  grid-column-end: 9;
  grid-row-start: 6;
  grid-row-end: 9;
  background-image: url(${require('../images/assets/designBtn.png')});
`
export const CurationButton = styled(Btn)`
  grid-column-start: 9;
  grid-column-end: 10;
  grid-row-start: 4;
  grid-row-end: 6;
  background-image: url(${require('../images/assets/curationBtn.png')});
`

export const FullName = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 8;
  justify-self: center;
  align-self: center;
`
