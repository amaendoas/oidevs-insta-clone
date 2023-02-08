import styled, { css } from "styled-components";
import { Text, TextLink } from "../../ui/Text";

export const flexDefault = css`
  display: flex;
  gap: 5px;
`

export const Container = styled.div`
  ${flexDefault}
  align-items: center;
  margin-bottom: 3rem;
`

export const Info = styled.div`
  ${flexDefault}
  margin-left: 3rem;
  flex-direction: column;
  gap: 1rem;
`

export const Title = styled.div`
  ${flexDefault}
  align-items: center;
  gap: 1.5rem;
`


export const FollowersInfo = styled(TextLink)`
  ${flexDefault}
`

export const PublicationsInfo = styled(Text)`
  ${flexDefault}
`

export const ButtonsWrapper = styled.div`
  ${flexDefault}
  gap: 10px;
  align-items: center;
`

export const FollowersWrapper = styled.div`
  ${flexDefault}
  gap: 2rem;
`

export const BioWrapper = styled.div`
`

export const BioFooter = styled.div`
  margin-top: 1rem;
`

export const FooterInfo = styled(Text)`
  ${flexDefault}
`