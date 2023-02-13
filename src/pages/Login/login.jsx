import * as S from "./styles"
import logo from "../../assets/Instagram-white-logo.png"
import { Button } from "../../ui/Button/button"
import { Input } from "../../components/Input"
import { Text, TextLink } from "../../ui/Text"
import { useState } from "react"

export const Login = ({onLogin, onClickSignUpPage}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if(!username || !password) {
      alert('Preencha todos os campos!')
    } else {
      alert(`username: ${username}, senha: ${password}`)
      onLogin()
    }
  }

  return (
    <S.Container>
     <S.ContentWrapper>
      <img src={logo} alt="" />
      <Input
      type="text"
      placeholder="ex: amanda_g"
      label="Username"
      onChange={(e) => setUsername(e.target.value)}
      />

      <Input
      type="password"
      placeholder="mínimo 6 caracteres"
      label="Senha"
      onChange={(e) => setPassword(e.target.value)}
      />

      <Button
      text='Entrar'
      bg="#0095f6"
      color="#fff"
      size={14}
      medium
      onClick={handleLogin}
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