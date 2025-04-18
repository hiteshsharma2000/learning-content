import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Router } from 'react-router-dom'
import UserLogin from './components/UserLogin'
import Allroutes from './components/Allroutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <div style={{fontSize:"2rem",textDecoration:"none",color:"red",backgroundColor:"gray",display:"flex",justifyContent:"space-evenly",padding:"5px"}}>

    <Link to='/register' style={{textDecoration:'none',color:"red"}}>Register</Link>
    <Link to='/login' style={{textDecoration:'none',color:"red"}}>login</Link>
    </div>
    {/* <UserLogin/> */}
    <Allroutes/>
    
    </>
  )
}

export default App
