import * as S from "./styles"
import {Avatar} from '../Avatar'
import {Text} from "../../ui/Text"

export const StoriesItem = ({src, text}) => {
  return (
    <S.Container>
      <Avatar src={src} size='small'/>
      <S.StoriesText size={12} medium>{text}</S.StoriesText>
    </S.Container>
  )
}