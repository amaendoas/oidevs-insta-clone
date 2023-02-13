import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  height: 100%;
  width: 253px;
  background-color: #010101;
  display: grid;
  grid-template-rows: auto 100px;
  position: fixed;
  border-right: 1px solid #333333;

  img {
    width: 7rem;
  }

  button {
    width: 100%;
  }

  button:hover {
    background-color: #121212;
    border-radius: 10px;
    transition: 0.5s;
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
  flex-direction: column;
  align-items: center;
`