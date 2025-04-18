import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Link to={'/one'} >one</Link>
    <Routes>
      <Route path='/' element={<h4>hiwdwdwdewdwed</h4>} />
      <Route path='/one' element={<h4>hloooooooooooooooooooooooo</h4>} />
    </Routes>
      
    </>
  )
}

export default App
