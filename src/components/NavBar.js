import React, { useState } from 'react'
import logo from '../assests/logo.png';
import { Link,NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
export default function NavBar() {
    const[menu,setMenu] = useState(false);
  return (
    <div>
        <nav className='bg-nav-color static top-0 left-0 text-[white] sm:h-[100px] font-[600] mx-auto w-full flex sm:flex-row flex-col sm:justify-between justify-center items-center gap-4'>
           
                {/* logo */}

            <div className='w-[20%] ml-6 left-0 md:static absolute'>
                <img className='mix-blend-multiply sm:w-[80px] w-[40px] ' src= {logo} alt='img' width={70} height={32} loading='lazy'></img>
            </div>
            <div className='text-3xl md:hidden md:static ' onClick={() => setMenu(!menu)}>
                 {
                    menu ?   (<AiOutlineClose/>) : (<GiHamburgerMenu/>)
                 }
            </div>   
            {/* nav button */}

            <div className={`sm:w-[80%] absolute md:static ${menu ? 'top-[50px]' : 'top-[-320px]'} bg-nav-color w-full 
            sm:left-[20%] flex sm:flex-row flex-col justify-evenly items-center transition-all duration-500 ease-in`}>
             <div className='w-[50%]'>
                <ul className='flex  flex-col sm:flex-row py-[0.3125rem]   justify-evenly items-center gap-3'>
                    <li>
                        <NavLink to = "/Home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/Feed">Feed</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/">About</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/">Contact Us</NavLink>
                    </li>
                    
                </ul>
             </div>
             <div className='w-[40%]'>
                <ul className='flex flex-col sm:flex-row py-[0.3125rem]  justify-evenly items-center gap-2'>
                    <li>
                        <NavLink to = "/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/signup">Sign Up</NavLink>
                    </li>
                </ul>
             </div>
            </div>
            <div></div>
        </nav>

    </div>
  )
}
