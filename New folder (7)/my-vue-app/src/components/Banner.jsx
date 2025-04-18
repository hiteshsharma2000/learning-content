import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Banner = () => {
    const [data1,setdata1]=useState([])
    const [data2,setdata2]=useState([])
    const [todo,settodo]=useState({
        "Name":"","age":"","email":""
    })

    const [list,setlist]=useState([])


const handlechange=(e)=>{
const {name,value}=e.target
    settodo((prev)=>({

        ...prev,
        [name]:value
    }))
}

const getdata=async ()=>{

    try {
        
        const prevdata=await fetch('https://jsonplaceholder.typicode.com/todos')
        .then((responce)=>responce.json())
        .then((data)=>{setdata1(data)})
        
        await axios.get('https://jsonplaceholder.typicode.com/todos/').then((responce)=>{setdata2(responce)})
       setTimeout(()=>{
        console.log(data1,data2)
       },5000)

    } catch (error) {
        console.log(error)
    }
}

const handlesubmit=(e)=>{
e.preventDefault()
   setlist([todo,...list])
   console.log(list)
   alert('data added')
   settodo({
    Name: '',
    age: '',
    email:""
});
}

// // Clear
useEffect(()=>{
  
    getdata()
    let interval=setInterval(()=>{
        console.log(111)
    },1000)
   let timeout=setTimeout(()=>{
    console.log("data1111",data1)
    console.log("data222",data2)
   },3000)
   
   return ()=>{
   clearTimeout(timeout)
   clearInterval(interval)
   }
},[todo])



  return (
   <div>
    <form action="submit" onSubmit={handlesubmit}>
    <input type="text" value={todo.Name} name='Name'  onChange={handlechange} required placeholder='name'/>
    <input type="email" value={todo.email} name='email'  onChange={handlechange} required placeholder='email'/>
    <input type="number" value={todo.age} name="age" onChange={handlechange} required placeholder='age'/>
<input type="submit" />
    </form>
    <table>
        
        <tbody>
            <tr>
                <th>Name</th>
                <th>age</th>
                <th>email</th>
                <th>delete</th>
            </tr>
           {list.map((ele)=>{
            return <tr>
                <td>{ele.Name}</td>
                <td>{ele.age}</td>
                <td>{ele.email}</td>
                <button >delete</button>
            </tr>
           })}
            
        </tbody>
    </table>
   </div>
  )
}

export default Banner