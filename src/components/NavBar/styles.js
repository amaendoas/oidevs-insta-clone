import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  height: 100%;
  width: 253px;
  background-color: #010101;
  display: grid;
  grid-template-rows: auto 50px;
  position: fixed;

  img {
    width: 7rem;
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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`