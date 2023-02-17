import logo from "../../assets/Instagram-white-logo.png"
import { Input } from "../../ui/Input"
import { Text, TextLink } from "../../ui/Text"
import { Button } from "../../ui/Button/button"
import { useContext, useState } from "react"
import { FormContainer, FormContent, FormFooter } from "../../ui/Form"
import { InstaContext } from "../../context"
       
export const SignUp = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState("")

  const { dispatch } = useContext(InstaContext)

  const goToLoginPage = () => {
    dispatch({type: "change_current_page", payload: "login"})
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    if(!username || !email || !password || !age) {
      alert('Preencha todos os campos!')
    } else if(password.length < 6) {
      alert('A senha deve conter no mínimo 6 caracteres')
    } else {
      alert(`username: ${username}, email: ${email}, senha: ${password}, idade: ${age}`)
      goToLoginPage()
    }
  }

  return (
    <FormContainer>
      <FormContent>
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
      </FormContent>
      <FormFooter>
      <Text>Já tem conta?</Text>
      <TextLink
      medium
      color="#0095f6"
      onClick={goToLoginPage}
      > Fazer login</TextLink>
      </FormFooter>
    </FormContainer>
  )
}