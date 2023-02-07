import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 100%;
  grid-template-areas: "nav content";
  height: 100vh;
  `

export const GridItem = styled.div `
  height: 100%;
  `