import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 20px 3fr 1fr;
  grid-template-columns: 1fr 5fr 1fr;

  @media(max-width: 1024px) {
    grid-template-rows: 60px 3fr 1fr;
    grid-template-columns: 1fr 5fr 1fr;
  }
`

export default Container
