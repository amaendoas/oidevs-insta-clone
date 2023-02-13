import { useState } from 'react';
import './App.css'
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { SignUp } from './pages/SignUp/signUp';

function App() {
  const [currentPage, setCurrentPage] = useState("login")

  return (
    <>
    {currentPage === 'profile' &&
    <Profile
    onLogOut={() => setCurrentPage("login")}/>}

    {currentPage === 'login' &&
    <Login
    onLogin={() => setCurrentPage("profile")}
    onClickSignUpPage={() => setCurrentPage("signUp")}/>}

    {currentPage === 'signUp' &&
    <SignUp
    onClickLoginPage={() => setCurrentPage("login")}/>}
    </>
  )
}

export default App
