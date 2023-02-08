import { Text } from "../Text"
import * as S from "./styles"

export const Button = ({text, icon: Icon, color, bg, iconSize}) => {
  return (
    <S.Container bg={bg}>
      <Text size={12} color={color || "#000"} bold>{text && text}</Text>
      {Icon && <Icon color={color || '#000'} size={iconSize || 16}/>}
    </S.Container>
  )
}