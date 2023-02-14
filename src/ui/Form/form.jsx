import styled, { css } from "styled-components";

const defaultStyle = css`
  display: flex;
  background-color: #000;
  border: 1px solid #333333;
  width: 500px;
`

export const FormContainer = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`

export const FormContent = styled.div`
  ${defaultStyle}
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: fit-content;
  padding: 40px;

  img {
    width: 180px;
    height: auto;
  }

  button {
    width: 100%;
  }
`;

export const FormFooter = styled.div`
  ${defaultStyle}
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 10vh;
`;


