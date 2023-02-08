import styled, {css} from "styled-components"

const textCss = css`
  color: ${({color}) => color ? color : "#fff"};
  font-weight: ${({bold}) => (bold ? "900" : "")};
  font-size: ${({size}) => size ? `${size}px` : '14px'};
  display: flex;
  gap: 5px;
`;

export const Text = styled.p`
  ${textCss}
`

export const TextLink = styled.a`
  ${textCss}
  cursor: pointer;

  :hover {
    filter: brightness(0.8) ;
  }
`
