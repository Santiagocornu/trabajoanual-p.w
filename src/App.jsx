import { useState } from 'react'
import { BrowserRouter,Routes,Route,  } from 'react-router-dom'
import LoginSelect from './Components/LoginSelect/LoginSelect'
import Naza from './Components/Naza/Naza'
import LoginEmail from './Components/LoginEmail/LoginEmail'
import Register from './Components/RegisterEmail/RegisterEmail'

function App() {
  

  return (
    <>
    <BrowserRouter>
   <Routes>

    <Route path='/' element={<Naza></Naza>}/>
    <Route path='/LoginSelect' element={<LoginSelect></LoginSelect>}/>
    <Route path='/LoginEmail' element={<LoginEmail></LoginEmail>}></Route>
    <Route path='/RegisterEmail' element={<Register/>}></Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
