import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home'
import One from '../one'
import Second from '../second'

const Allroutes = () => {
  return (
    <div>
<Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/one' element={<One/>} />
    <Route path='/second' element={<Second/>} />
</Routes>

    </div>
  )
}

export default Allroutes