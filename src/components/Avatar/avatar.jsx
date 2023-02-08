import * as S from "./styles"

export const Avatar = ({size, src}) => {
  return (
    <S.Container size={size}>
      <S.Image size={size} src={src || 'https://via.placeholder.com/150'}/>
    </S.Container>
  )
}