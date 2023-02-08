import { Button } from "../../ui/Button/button"
import { Text, TextLink } from "../../ui/Text"
import { Avatar } from "../Avatar"
import * as S from "./styles"
import {MdExpandMore, MdPersonAddAlt, MdOutlineMoreHoriz} from "react-icons/md"

export const Header = () => {
  const followers = [
    {
      user: 'machado_bru',
      scr: ''
    },
    {
      user: 'caiosilva_',
      scr: ''
    },
    {
      user: 'felipearb',
      scr: ''
    },
  ]
  return (
    <S.Container>
     <Avatar/>
     <S.Info>
      <S.Title>
        <Text size={16}>adatechbr</Text>
        <S.ButtonsWrapper>
          <Button text='Seguindo' icon={MdExpandMore}/>
          <Button text='Enviar mensagem'/>
          <Button icon={MdPersonAddAlt}/>
          <Button icon={MdOutlineMoreHoriz} color='#fff' bg='transparent' iconSize={24}/>
        </S.ButtonsWrapper>
      </S.Title>
      <S.FollowersWrapper>
        <S.PublicationsInfo>
          <Text bold>211</Text>
          <Text>publicações</Text>
        </S.PublicationsInfo>
        <S.FollowersInfo>
          <Text bold>44,2 mil</Text>
          <Text>Seguidores</Text>
        </S.FollowersInfo>
        <S.FollowersInfo>
          <Text bold>2</Text>
          <Text>Seguindo</Text>
        </S.FollowersInfo>
      </S.FollowersWrapper>
      <S.BioWrapper>
        <Text bold>
          Ada Tech
        </Text>
        <Text color="#a1a1a1">
          Educação
        </Text>
        <Text>
          Ada. A nova Educação.
        </Text>
        <S.FollowersInfo color="#D2E5F3">
          beacons.ai/adatechbr
        </S.FollowersInfo>
        <S.BioFooter>
          <S.FooterInfo size={12} color="#a1a1a1">
            Seguido por
            {
              followers.map((follower) => (
              <TextLink size={12} key={follower.user}>
                {follower.user}
              </TextLink>
              ))
            }
            e outras 2 pessoas
          </S.FooterInfo>
        </S.BioFooter>
      </S.BioWrapper>
     </S.Info>
    </S.Container>
  )
}