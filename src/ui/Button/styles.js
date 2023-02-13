import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({bg}) => bg || '#e8ecff'};
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    filter: brightness(0.9);
  }
`