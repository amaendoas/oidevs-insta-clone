import styled from "styled-components";

export const Container = styled.div(({size}) => {
  return {
    overflow: 'hidden',
    borderRadius: '50%',
    ...(size === "small" ? smallSize : defaultSize)
  }
})

export const Image = styled.img(({size}) => {
  return {
    objectFit: 'cover',
    ...(size === "small" ? smallSize : defaultSize)
  }
})

const defaultSize = {
  width: "150px",
  height: "150px",
};

const smallSize = {
  width: "90px",
  height: "90px",
};