import React from 'react'
import kartikey from '../assests/Kartikey.jpg';
import rahulLap from "../assests/RahulLap.jpg";
import rahultree from '../assests/RahulTree.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function About() {
  return (
    <div id='about' className='w-[80%] mx-auto flex flex-col justify-center items-center gap-5'>
         <div data-aos="flip-right" className=' flex flex-col  justify-center items-center gap-4 mt-7 '>
            <h1 className='md:text-[3.2rem] text-[1.5rem] font-[500]'>About Us</h1>
            <div className='border-b border-4 w-full rounded-lg border-button'></div>
            <p className=' mt-9 text-center font-[400] text-[#514F4F] '>Welcome to Lost & Found, a platform dedicated to helping people recover their lost belongings. Our mission is to make the process of finding lost items easier and more efficient.We understand the frustration and inconvenience that comes with losing something valuable. That's why we've built this platform to connect lost items with their rightful owners.</p>
         </div>
         <div className='flex flex-col justify-center items-center gap-8'>
            <h3 data-aos="flip-left" className='md:text-[1.8rem] text-[1.2rem] font-[500]'>Meet the Team:</h3>
            <div  className='flex gap-[70px] md:flex-row flex-col w-[70%] justify-center items-center md:w-[60%]'>
                 {/* RAHUL */}
                <div data-aos="flip-right" className='flex flex-col gap-4 justify-center items-center'>
                  <div className='w-[200px] h-[200px] '>
                    <img className='rounded-full w-[190px] h-[190px] border-white border-[2px]' src={rahulLap}></img>
                    </div>
                    <p className='text-[1.3rem] font-bold'>Rahul Kumar Verma</p>
                    <p className='text-[1.1rem] text-[#514F4F] '>Fronted Devloper</p>
                 </div>
                  {/* kartikey */}
                 <div data-aos="flip-left" className='flex flex-col gap-4 justify-center items-center'>
                    <div className='w-[190px] h-[190px]  '>
                    <img className='rounded-full w-[190px] h-[190px] border-white border-[2px]' src={kartikey}></img>
                    </div>
                    <p className='text-[1.3rem] font-bold'>Kartikey Chauhan</p>
                    <p className='text-[1.1rem] text-[#514F4F] '>UI Designer</p>
                  
                 </div>
            </div>
         </div>

     </div>
  )
}
