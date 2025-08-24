import React from 'react'
import './App.css'
import Home from './Screens/Home.jsx' 
import Login from './Screens/Login.jsx'
import { Route, Routes, Link } from "react-router";

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App





