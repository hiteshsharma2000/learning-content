import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Userregister = () => {
    const [newuser,setnewuser]=useState({
        name:"",
        email:"",
        password:"",

})

const [alldata,setalldata]=useState([])

    const navigate=useNavigate()
    const handleregister=()=>{
        // alert('form submitted')
        // setalldata([...alldata,newuser])
        console.log(newuser)
        // navigate('/register')
        
    }
    const handlechange=(e)=>{
        const {name,value}=e.target

   setnewuser({
    ...newuser,
    [name]:value
   })
    }
  return (
    <div>
        <form action="" style={{display:"flex",flexDirection:'column',paddingLeft:"30%",paddingRight:"30%",gap:"15px"}}>
           <label>Name:</label> 
           <input type="name" value={newuser.name} name='name'  onChange={(e)=>handlechange(e)} required />
           <label>Email:</label> 
            <input type="email" value={newuser.email} name='email' onChange={(e)=>handlechange(e)} required />
            <label>Password:</label> 
            <input type="password" value={newuser.password} name='password' onChange={(e)=>handlechange(e)} required/>
         
            <input type="submit"  onSubmit={handleregister} />
           
        </form>
    

  {alldata.map((ele)=>{
    return <h2>{ele.name}</h2>
  })}

    </div>
  )
}

export default Userregister