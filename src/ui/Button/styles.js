import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({bg}) => bg || '#e8ecff'};
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`