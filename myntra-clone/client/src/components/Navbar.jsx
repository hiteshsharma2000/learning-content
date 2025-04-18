import React from 'react'

const Navbar = () => {
  return (
    <div class="navsection flex items-center md:px-[2.5em] lg:px-[3em] justify-evenly py-[7px]">
        <img className='w-16 ' src="https://th.bing.com/th?id=OIP.ZfIQIYuS-cZFg_1AzC7uHQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
        <div class='category flex w-1/2 justify-evenly items-center h-full'>
           <div>
           <h2>Men</h2>
            </div>
           <div>
           <h2>Women</h2>
            </div>
           <div>
           <h2>Kids</h2>
            </div>
           <div>
           <h2>Trending</h2>
            </div>
            
         
        </div>
        

        <input class='pl-[1.5em]' type="text" placeholder='Search ...' />
        <div class='LOGO  flex justify-evenly'>
            <div >
                <div class='grid items-center justify-center'>
                   <i class='bx bx-user m-auto'></i>
                </div>
                <h4>profile</h4>
            </div>
            <div >
                <div class='grid items-center justify-center'>
                <i class='bx bx-heart' ></i>
                </div>
                <h4>Wishlist</h4>
            </div>
            <div >
                <div class='grid items-center justify-center'>
                <i class='bx bx-shopping-bag' ></i>
                </div>
                <h4>Cart</h4>
            </div>
        
   
        </div>
    </div>
  )
}

export default Navbar