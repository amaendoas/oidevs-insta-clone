import styled, {css} from "styled-components"

const textCss = css`
  color: ${({color}) => color ? color : "#fff"};
  font-weight: ${({bold, medium}) => (bold ? "900" : medium ? '600' : "")};
  font-size: ${({size}) => size ? `${size}px` : '14px'};
`;

export const Text = styled.p`
  ${textCss}
`

export const TextLink = styled.a`
  ${textCss}
  cursor: pointer;
`
