import React, { useState } from 'react'

const Signup = () => {
const [stdetail,setstdetail]=useState({email:"",password:""})
const handlechange=(e)=>{
    const {name,value}=e.target
    setstdetail((prev)=>({
  ...prev,
  [name]:value
    }))

    console.log(stdetail)
}

const handlesubmit=(e)=>{
    e.preventDefault()
    localStorage.setItem("userdeatil",JSON.stringify(stdetail))
    setstdetail({email:"",password:""})
}
  return (
    <div>Signup

  <form onSubmit={handlesubmit}>
   <input type="email"
    name='email'
    value={stdetail.email}
    onChange={handlechange}
   required />
   <input type="password"
    name='password'
    value={stdetail.password}
    onChange={handlechange}
   required/>
   <input type="submit" value="submit"/>

  </form>


    </div>
  )
}

export default Signup