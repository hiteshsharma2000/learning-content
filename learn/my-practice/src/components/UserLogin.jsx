import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
    const [login,setlogin]=useState({
        email:"",
        password:"",
    })
    const navigate=useNavigate()
    const handlelogin=()=>{
        alert('form submitted')
        console.log(login)
        navigate('/')
    }
    const handlechange=(e)=>{
const {name,value}=e.target

     setlogin({
        ...login,
        [name]:value
     })
    }
  return (
    <div>
        <form action="submit"  onSubmit={handlelogin} style={{display:"flex",flexDirection:'column',paddingLeft:"30%",paddingRight:"30%",gap:"15px"}}>
          
           <label>Email:</label> 
            <input type="email" name='email' onChange={(e)=>{handlechange(e)}} required />
            <label>Password:</label> 
            <input type="password" name='password' onChange={(e)=>{handlechange(e)}} required/>
         
            <input type="submit" />
        </form>
    </div>
  )
}

export default UserLogin