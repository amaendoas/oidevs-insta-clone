import styled from "styled-components";
import { Text } from "../../ui/Text";

export const Container = styled.button`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  gap: 5px;

  ${({activeTab}) => activeTab ? "border-top: 2px solid #fff" : ""}
  
`

export const TabText = styled(Text)`
  text-transform: uppercase;
`