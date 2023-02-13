import styled from "styled-components";

export const Grid = styled.div((style) => {
  return {
    display: 'grid',
    gridTemplateColumns: '253px auto',
    gridTemplateRows: '100%',
    height: '100vh',
    ...(style ? style : '')
  }
})
  

export const GridItem = styled.div((style) => {
  return {
    height: '100%',
    width: '100%',
    ...(style ? style : '')
  }
})
  