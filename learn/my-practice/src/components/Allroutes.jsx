import React from 'react'
import UserLogin from './UserLogin'
import { Route, Routes } from 'react-router-dom'
import Userregister from './Userregister'

function Allroutes() {
  return (
    <div> <Routes>
      
    <Route path='/' element={<h1>welcome to Home screen</h1>}/>
    <Route path='/login' element={<UserLogin/>}/> 
    <Route path='/register' element={<Userregister/>}/> 
  </Routes></div>
  )
}

export default Allroutes