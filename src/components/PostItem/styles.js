import styled from "styled-components";

export const Container = styled.div`
  width: 293px;
  height: 293px;
  overflow: hidden;
  background-image: ${({src}) => `url(${src})`};
  background-position: center;
  background-size: cover;
  position: relative;

  :hover {
    filter: brightness(0.9);
    cursor: pointer;
  }

  svg {
    position: absolute;
    right: 5px;
    top: 5px;
  }
`