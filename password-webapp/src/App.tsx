import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login  from './pages/Login'
import Registration from './pages/registration'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={< Login/>}/>
          <Route path="/cadastro" element={< Registration/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
