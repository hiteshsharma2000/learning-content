import React from 'react'
import { Route, Routes } from 'react-router-dom'
const Allroute = () => {
  return (
    <div><Routes>
    <Route path='/' element={<p>hello</p>} />
    <Route path='/add' element={<p>wqdqw</p>} />
  </Routes></div>
  )
}

export default Allroute