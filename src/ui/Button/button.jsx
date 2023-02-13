import { Text } from "../Text"
import * as S from "./styles"

export const Button = ({text, icon: Icon, color, bg, iconSize, bold, medium, size, ...rest}) => {
  return (
    <S.Container bg={bg} {...rest}>

      <Text
      size={size || 12}
      color={color || "#000"}
      bold={bold}
      medium={medium}>
        {text && text}
      </Text>

      {Icon &&
      <Icon
      color={color || '#000'}
      size={iconSize || 16}/>}

    </S.Container>
  )
}