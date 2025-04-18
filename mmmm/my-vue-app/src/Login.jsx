import React, { useState } from 'react'

const Login = () => {
const [login,setlogin]=useState({email:"",password:""})

const handlechange=(e)=>{
    const {name,value}=e.target
  setlogin((prev)=>({
    ...prev,
    [name]:value
  }))
 console.log(login)

}

const handlesubmit=(e)=>{
    e.preventDefault()
   
  const register = JSON.parse(localStorage.getItem('userdeatil'))
  if(register.email==login.email && register.password==login.password){
    alert("login successful")
  }
  else{
    alert('wrong credentials')
  }
 
  

}
  return (
    <div>Login
        <form onSubmit={handlesubmit} >
          <input type="email" name='email' 
    onChange={handlechange}
  value={login.email}
          />
          <input type="password"
          name='password'
          onChange={handlechange} 
          value={login.password}
          />
          <input type="submit" name='submit'/>

        </form>

    </div>
  )
}

export default Login