import { createContext, useReducer } from 'react';
import './App.css'
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { SignUp } from './pages/SignUp/signUp';
import { InstaContext, reducer, initialState } from "./context"

function App() {
  const [globalState, dispatch] = useReducer(reducer, initialState)

  return (
    <InstaContext.Provider value={{globalState, dispatch}}>
      {globalState.currentPage === 'profile' &&
      <Profile/>}

      {globalState.currentPage === 'login' &&
      <Login/>}

      {globalState.currentPage === 'signUp' &&
      <SignUp/>}
    </InstaContext.Provider>
  )
}

export default App
