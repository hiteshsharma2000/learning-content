import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Allroute from './Allroute'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
 const [data,setdata]=useState([])
const getalldata=async ()=>{
  try {
    
  const datas=await fetch('https://jsonplaceholder.typicode.com/todos').then((e)=>e.json())

  console.log("data",datas)
setdata(datas)

  } catch (error) {
    console.log(error)
  }
}

useEffect(()=>{

getalldata()
},[data])

  return (
    <>
    {/* {data.map((e)=>{
      return <div style={{display:'flex',flexDirection:"rows"}}>
        <p>{e.title}</p>
        <p>{e.completed ? "completed":"notcompleted"}</p>
      </div>
    })} */}
   




    </>
  )
}

export default App
