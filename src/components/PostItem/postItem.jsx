import * as S from "./styles"
import {TiPin} from "react-icons/ti"

export const PostItem = ({src, fixed}) => {
  return (
    <S.Container src={src}>
      {fixed && <TiPin size={25}/>}
    </S.Container>
  )
}