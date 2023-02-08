import { TextLink } from "../../ui/Text"
import * as S from "./styles"

export const NavItem = ({text, icon: Icon, size, color}) => {
  return (
    <S.Container>
      {Icon && <Icon size={size + 10 || 25} color={color || '#fff'}/>}
      <TextLink size={size} color={color}>
        {text}
      </TextLink>
    </S.Container>
  )
}
