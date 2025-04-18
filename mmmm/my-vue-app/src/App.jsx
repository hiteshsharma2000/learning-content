import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route, Link } from 'react-router-dom'
import Allroutes from './Allroutes/Allroutes'
import Signup from './Signup'
import Login from './Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div style={{display:"flex",justifyContent:"space-evenly"}}>
    <Link to={'/'}>Home</Link>
    <Link to={'/second'}>second</Link>
    <Link to={'/one'}>one</Link>
   </div>

 <Allroutes/>
 <br />

 <Login/>
 <br />
 <br />
 <hr />
     <Signup/>
    </>
  )
}

export default App
