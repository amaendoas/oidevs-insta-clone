import * as S from "./styles"
import logo from "../../assets/Instagram-white-logo.png"
import { Input } from "../../components/Input"
import { ContentWrapper, FooterWrapper } from "../Login/styles"
import { Text, TextLink } from "../../ui/Text"
import { Button } from "../../ui/Button/button"
import { useState } from "react"

export const SignUp = ({onClickLoginPage}) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState("")

  const handleSignUp = () => {
    if(!username || !email || !password || !age) {
      alert('Preencha todos os campos!')
    } else if(password.length < 6) {
      alert('A senha deve conter no mínimo 6 caracteres')
    } else {
      alert(`username: ${username}, email: ${email}, senha: ${password}, idade: ${age}`)
      onClickLoginPage()
    }
  }

  return (
    <S.Container>
      <ContentWrapper>
        <img src={logo} alt="" />
        <Input
        label="Username"
        placeholder="ex: amanda_g"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        />

        <Input
        label="E-mail"
        placeholder="email@email.com"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        />

        <Input
        label="Senha"
        placeholder="no mínimo 6 caracteres"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        />

        <Input
        label="Idade"
        placeholder="apenas números"
        type="number"
        onChange={(e) => setAge(e.target.value)}
        />

        <Button
          text='Cadastrar'
          bg="#0095f6"
          color="#fff"
          size={14}
          medium
          onClick={handleSignUp}
        />
      </ContentWrapper>
      <FooterWrapper>
      <Text>Já tem conta?</Text>
      <TextLink
      medium
      color="#0095f6"
      onClick={onClickLoginPage}
      > Fazer login</TextLink>
      </FooterWrapper>
    </S.Container>
  )
}