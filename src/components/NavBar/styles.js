import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  height: 100%;
  background-color: #010101;
  display: grid;
  grid-template-rows: auto 20px;
  
  img {
    width: 8rem;
  }
  
  button:hover {
    background-color: #131313;
    border-radius: 8px;
    transition: 0.3s;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Footer = styled.div`
`