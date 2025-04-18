import React, { useState ,useEffect} from 'react'

const Navbar = () => {
const [data,setdata]=useState([])
const navdata=()=>{
    setdata( [
        {Name:"Home"},
        {Name:"About Me"},
        {Name:"Contact Us"},
        {Name:"Profile"}
    ]
    )
}

useEffect(()=>{
    navdata()
},[])
  return (
    <div style={{backgroundColor:"grey",position:"fixed",width:"100%",display:"flex",justifyContent:"space-evenly",border:"1px solid black",marginTop:"0",paddingTop:"5px",paddingBottom:"5px"}}>
        {data.map((ele)=>{
            return <a href="">{ele.Name}</a>
        })}
        <input style={{padding:"5px"}} type="text" placeholder='search' />
    </div>
  )
}

export default Navbar