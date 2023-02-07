import { TextLink } from "../../ui/Text"
import * as S from "./styles"

export const NavItem = ({text, icon: Icon, size, color}) => {
  return (
    <S.Container>
      {Icon && <Icon size={size + 10 || 25}/>}
      <TextLink size={size}>
        {text}
      </TextLink>
    </S.Container>
  )
}
