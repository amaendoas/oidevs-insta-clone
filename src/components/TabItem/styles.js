import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  gap: 5px;
  
  ${({activeTab}) => activeTab ? "border-top: 2px solid #fff" : ""}
  
`