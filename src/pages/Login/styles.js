import styled from 'styled-components';
import { FormContainer } from '../../components/FormContainer';

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
  gap: 20px;
`

export const FooterWrapper = styled(FormContainer)`
  flex-direction: row;
  gap: 8px;
  height: 10vh;
`;
