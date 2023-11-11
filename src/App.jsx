import { useState } from 'react'
import Register from './Components/RegisterEmail/RegisterEmail'
import Login from './Components/LoginEmail/LoginEmail'
import LoginGoogle from './Components/LoginGoogle/LoginGoogle'
import LoginGitHub from './Components/LoginGitHub/LoginGitHub'


function App() {
  

  return (
    <>
  <LoginGitHub></LoginGitHub>
  <LoginGoogle></LoginGoogle>
  <Register></Register>
  <Login></Login>
    </>
  )
}

export default App
