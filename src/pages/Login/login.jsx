import logo from "../../assets/Instagram-white-logo.png"
import { Button } from "../../ui/Button"
import { Input } from "../../ui/Input"
import { Text, TextLink } from "../../ui/Text"
import { useState } from "react"
import { FormContainer, FormContent, FormFooter } from "../../ui/Form"
import { useContext } from "react"
import { InstaContext } from "../../context"

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('')

  const { dispatch } = useContext(InstaContext)

 const onLogin = () => {
  dispatch({type: "change_current_page", payload: "profile"})
  dispatch({type: "add_user", payload: {username: username}})
 }

 const onClickSignUpPage = () => {
  dispatch({type: "change_current_page", payload: "signUp"})
 }

  const handleLogin = (e) => {
    e.preventDefault()
    if(!username || !password) {
      alert('Preencha todos os campos!')
    } else {
      onLogin()
    }
  }


  return (
    <FormContainer>
     <FormContent>
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
     </FormContent>

     <FormFooter>
      <Text>Ainda não tem conta?</Text>
      <TextLink
      medium
      color="#0095f6"
      onClick={onClickSignUpPage}
      > Cadastre-se </TextLink>
     </FormFooter>

    </FormContainer>
  )
}