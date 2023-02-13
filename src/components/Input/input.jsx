import * as S from "./styles"

export const Input = ({label, ...rest}) => {
  return (
    <S.Container>
    {label && <label htmlFor={label}>{label}</label>}
    <input {...rest} id={label}/>
    </S.Container>
  )
}