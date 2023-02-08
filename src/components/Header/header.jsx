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
        <TextLink>
          <Text bold>211</Text>
          <Text>publicações</Text>
        </TextLink>
        <TextLink>
          <Text bold>44,2 mil</Text>
          <Text>Seguidores</Text>
        </TextLink>
        <TextLink>
          <Text bold>2</Text>
          <Text>Seguindo</Text>
        </TextLink>
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
        <TextLink>
          beacons.ai/adatechbr
        </TextLink>
        <S.BioFooter>
          <Text size={12} color="#a1a1a1">
            Seguido por
            {
              followers.map((follower) => (
              <TextLink size={12} key={follower.user}>
                {follower.user}
              </TextLink>
              ))
            }
            e outras 2 pessoas
          </Text>
        </S.BioFooter>
      </S.BioWrapper>

     </S.Info>
    </S.Container>
  )
}