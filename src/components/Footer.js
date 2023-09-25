import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import home from '../assests/home.svg';
export default function ()

{
    useEffect(()=>{
        Aos.init({duration : 2000});
    },[])

    const customGradientStyles = {
        background: 'radial-gradient(188.78% 94.89% at 0.87% 7.36%, #C3C6FF 0%, rgba(182, 184, 241, 0.46) 78.95%, rgba(255, 255, 255, 0.12) 100%)',
      };
  return (
    
    <div style={customGradientStyles} className='w-full'>
        <div data-aos="zoom-out-right"  className='w-[80%] flex flex-col md:flex-row justify-between items-center mx-auto '>
        {/* left */}
        <div className='flex flex-col md:justify-start md:items-start  justify-center items-center gap-3'>
            <h1 className='text-button font-bold text-[2.2rem] md:py-0 py-6 md:text-[4.6rem]'>Rediscover  Treasure</h1>
            <p className='text-button text-[20px]'>your lost items, your stories, and your treasures reunited. Start your journey to find what's been missing.</p>
            <button className='bg-button mt-10 text-white p-3 rounded-xl font-bold  '>Get Started</button>
        </div>

        {/* right */}
        <div>
            <img className='w-[500px] flex justify-center items-center' src={home}></img>
        </div>

    </div>
    </div>
  )
}
