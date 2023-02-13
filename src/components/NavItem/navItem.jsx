import { TextLink } from "../../ui/Text"
import * as S from "./styles"

export const NavItem = ({text, icon: Icon, size, iconSize, color, ...rest}) => {
  return (
    <S.Container {...rest}>
      {Icon && <Icon size={iconSize || 25} color={color || '#fff'}/>}
      <TextLink size={size} color={color}>
        {text}
      </TextLink>
    </S.Container>
  )
}
