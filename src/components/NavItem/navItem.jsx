import { TextLink } from "../../ui/Text"
import * as S from "./styles"

export const NavItem = ({text, icon: Icon}, size, color) => {
  return (
    <S.Container>
      {Icon && <Icon/>}
      <TextLink size={size}>
        {text}
      </TextLink>
    </S.Container>
  )
}
