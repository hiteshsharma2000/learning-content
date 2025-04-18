import {useSelector,useDispatch} from "react-redux"

import './App.css'
// import { decreament, increament } from "./redux/action";
import { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel ,Box,Heading,VisuallyHidden} from '@chakra-ui/react'

import About from "./components/About";
import Page from "./components/Page";
import Next from "./components/Next";


function App() {
 const store=useSelector((state)=>state)
//  const dispatch=useDispatch()
 const [data,setbannerdata]=useState([])
// console.log(store);
const handlechange=(e)=>{
  setdata(e.target.value)
  console.log(data)
}

  return (
    <>
    <Box w='100%' h="100vh" bgGradient='linear(to-l, #7928CA, #FF0080)' >
    <Box>
      <Heading>Title and description</Heading>
      <VisuallyHidden>This will be hidden</VisuallyHidden>
    </Box>
  
    <Tabs>
  <TabList style={{display:"flex",justifyContent:"space-evenly"}}>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <About/>
    </TabPanel>
    <TabPanel>
  <Page/>
    </TabPanel>
    <TabPanel>
  <Next/>
    </TabPanel>
  </TabPanels>
</Tabs>
      <h3>Count: {store.count}</h3>
      </Box>
      {/* <button onClick={()=>dispatch(increament(1))} >+1</button> */}
     
      {/* <button onClick={()=>dispatch(decreament(1))}>-1</button> */}
      {/* <input type="text" name="data" onChange={(e)=>handlechange(e)} /> */}
       {/* <button onClick={()=>{console.log(data)}}>submit</button> */}
 </>
  )
}

export default App
