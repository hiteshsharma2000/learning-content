import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Slider = () => {
const [slides,setslides]=useState([])
const getdata=async ()=>{
  const res=await  fetch('http://localhost:8080/slider/getdata')
  const res2=await res.json()
  console.log(res2)
  setslides(res2.data)
}
useEffect(()=>{
  getdata()
},[])


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div><Carousel
    swipeable={true}
    draggable={true}
    showDots={false}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={1100}
    keyBoardControl={true}
    customTransition="transform 300ms ease-in-out"
    transitionDuration={500}
    // rewindWithAnimation={true}
  
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile","superLargeDesktop","desktop"]}
    
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
   {slides.map((e)=>{
    return <div>
      <img  className='w-full' src={e.img} alt="" />
    </div>
   })}
    
  </Carousel></div>
  )
}

export default Slider