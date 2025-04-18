import React, { useEffect, useState } from 'react'

const Displaydata = () => {
  const [data,setdata]=useState([])
const getdata=async ()=>{
  const res=await fetch('http://localhost:8080/display/getdata')
  const res2=await res.json()
  console.log(res2)
  setdata(res2.data)
}

useEffect(()=>{
  getdata()
},[])


  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(10,1fr"}}>
      {data.map((ele)=>{
        return <div><img src={ele.img} onError={(event)=>event.target.setAttribute("src","https://tse1.mm.bing.net/th?id=OIP.jJtUwN90RIrjS0AdqN3DGQHaHu&pid=Api&P=0&h=220")} /></div>
      })}
    </div>
  )
}

export default Displaydata