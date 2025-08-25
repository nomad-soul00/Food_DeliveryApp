import React from 'react'
import './App.css'
import Home from './Screens/Home.jsx' 
import Login from './Screens/Login.jsx'
import { Route, Routes, Link } from "react-router";
import SignUp from './Screens/SignUp.jsx';

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App





