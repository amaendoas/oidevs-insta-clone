
import * as S from "./styles"
import logo from "../../assets/Instagram-white-logo.png"
import { Button } from "../../ui/Button/button"
import { Input } from "../../components/Input"
import { Text, TextLink } from "../../ui/Text"
import { useState } from "react"

export const Login = ({onLogin, onClickSignUpPage}) => {
  const [user, setUser] = useState("");

  const handleChangeUser = (event) => {
    setUser(event.currentTarget.value);
  };
  return (
    <S.Container>
     <S.ContentWrapper>
      <img src={logo} alt="" />
      <Input
      type="text"
      placeholder="ex: amanda_g"
      label="Username"
      onChange={handleChangeUser}
      />

      <Input
      type="password"
      placeholder="mínimo 6 caracteres"
      label="Senha"
      />

      <Button
      text='Entrar'
      bg="#0095f6"
      color="#fff"
      size={14}
      medium
      onClick={onLogin}
      />

      <TextLink>Esqueceu sua senha?</TextLink>
     </S.ContentWrapper>

     <S.FooterWrapper>
      <Text>Ainda não tem conta?</Text>
      <TextLink
      medium
      color="#0095f6"
      onClick={onClickSignUpPage}
      > Cadastre-se </TextLink>
     </S.FooterWrapper>

    </S.Container>
  )
}