import React, { useState } from 'react'
import logo from '../assests/logo.png';
import { Link,NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import {MdDarkMode}  from 'react-icons/md';
import {CiLight} from 'react-icons/ci'
export default function NavBar(props) {
    const footer = props.footer;
    const setFooter = props.setFooter;
    const dark = props.dark;
    
    const[menu,setMenu] = useState(false);
   
  return (
    <div>
        <nav className= 'md:bg-nav-color bg-transparent backdrop-blur-md shadow-md shadow-black fixed z-10  top-0 left-0 text-[white] sm:h-[100px] font-[600] mx-auto w-full flex sm:flex-row flex-col sm:justify-between justify-center items-center gap-4'>
           
                {/* logo */}

            <div className='w-[20%] md:ml-6 md:static '>
                <img className='mix-blend-multiply sm:w-[80px] md:ml-0 ml-[-130px] md:mt-0 mt-3 w-[40px] ' src= {logo} alt='img' width={70} height={32} loading='lazy'></img>
            </div>
            <div className='text-3xl text-black md:hidden md:static  absolute right-0 mr-3' onClick={() => setMenu(!menu)}>
                 {
                    menu ?   (<AiOutlineClose/>) : (<GiHamburgerMenu/>)
                 }
            </div>   
            {/* nav button */}

            <div className={`md:w-[80%]  md:shadow-[0] md:p-0 p-4 shadow-md shadow-black z-30 absolute md:static ${menu ? 'top-[65px]  ' : 'top-[-320px]'} bg-transparent backdrop-blur-sm md:text-white text-black text-[18px] md:text-[20px] z-10 w-full 
            sm:left-[20%] flex sm:flex-row flex-col md:justify-evenly md:items-center items-start  justify-between transition-all duration-500 ease-in`} >
             <div className='w-[50%]'>
                <ul className='flex  flex-col sm:flex-row py-[0.3125rem]   justify-evenly j md:items-center gap-3'>
                    <li onClick={()=> {setFooter(true); setMenu(false);} } className='hover:bg-white hover:rounded-lg hover:text-black  hover:p-1'>
                        <NavLink to = "/Home">Home</NavLink>
                    </li>
                    <li onClick={()=> {setFooter(false); setMenu(false);} } className='hover:bg-white hover:rounded-lg hover:text-black hover:p-1'>
                        <NavLink to = "/Feed">Feed</NavLink>
                    </li>
                    <li onClick={()=> {setFooter(false); setMenu(false);} } className='hover:bg-white hover:rounded-lg hover:text-black hover:p-1'>
                        <NavLink to = "/about">About</NavLink>
                    </li>
                    <li onClick={()=> {setFooter(false); setMenu(false);} } className='hover:bg-white hover:rounded-lg hover:text-black hover:p-1'>
                        <NavLink to = "/contactus">Contact Us</NavLink>
                    </li>
                    <div onClick={() => props.setDark(!dark)} className='text-blue-500 hover:text-button cursor-pointer ' >
                        {
                            dark ? (<CiLight style={{width : '30px' , height : '30px' }} />) : (<MdDarkMode style={{width : '30px' , height : '30px' }} />)
                        }
                    </div>
                    
                </ul>
             </div>
             <div className='w-[40%]'>
                <ul className='flex flex-col sm:flex-row py-[0.3125rem]  justify-evenly md:items-center gap-2'>
                    <li onClick={()=> {setFooter(false); setMenu(false);}} className='hover:bg-white hover:rounded-lg hover:text-black hover:p-1 border-white border-2 px-3 py-1 rounded-xl'>
                        <NavLink to = "/login">Login</NavLink>
                    </li>
                    <li onClick={()=> {setFooter(false); setMenu(false);} } className='hover:bg-white hover:rounded-lg hover:text-black hover:p-1  px-3 py-1 rounded-xl shadow-black shadow-md '>
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
