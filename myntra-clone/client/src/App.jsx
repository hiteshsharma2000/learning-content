import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Slider from './components/Slider'
import Displaydata from './components/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Navbar/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <br />
      <br />
    <br />
   
    <Banner/>
    <br />
    <Slider/>
    <br />
    <div><img src="https://assets.myntassets.com/f_webp,w_895,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/28/dc9e9f56-60e3-468a-b1ed-6b9fa20772531716906763459-Shop-By-Category.jpg" alt="" /></div>
    <br />
    <Displaydata/>
    
    </>
  )
}

export default App
