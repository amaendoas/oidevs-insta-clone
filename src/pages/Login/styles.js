import styled from 'styled-components';
import { FormContainer } from '../../ui/FormContainer';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled(FormContainer)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: fit-content;
  padding: 40px;
`;

export const FooterWrapper = styled(FormContainer)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 10vh;
`;
