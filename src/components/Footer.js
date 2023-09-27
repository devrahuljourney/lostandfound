import React, { useEffect } from 'react';
import kartikey from '../assests/Kartikey.jpg';
import rahulLap from "../assests/RahulLap.jpg";
import rahultree from '../assests/RahulTree.jpg';
import About from '../components/About';
import Aos from 'aos';
import 'aos/dist/aos.css';
import home from '../assests/home.svg';
import {AiOutlineUserAdd} from 'react-icons/ai';
import {GoVerified} from 'react-icons/go';
import {MdPostAdd} from 'react-icons/md';
import ContactUs from './ContactUs';
export default function ()

{
    useEffect(()=>{
        Aos.init({duration : 2000});
    },[])

    const customGradientStyles = {
        background: 'radial-gradient(188.78% 94.89% at 0.87% 7.36%, #C3C6FF 0%, rgba(182, 184, 241, 0.46) 78.95%, rgba(255, 255, 255, 0.12) 100%)',
      };
  return (
    
    <div style={customGradientStyles} className='md:mt-[5%] mt-[10%]  w-full'>
        <div  className='w-[80%]  flex flex-col md:flex-row justify-between items-center mx-auto '>
        {/* left */}
        <div data-aos="flip-left" className='flex flex-col md:justify-start md:items-start  justify-center items-center gap-3'>
            <h1 className='text-button font-bold text-[2.2rem] md:py-0 py-6 md:text-[4.6rem]'>Rediscover  Treasure</h1>
            <p className='text-button text-[20px]'>your lost items, your stories, and your treasures reunited. Start your journey to find what's been missing.</p>
            <button className='bg-button mt-[10%] text-white p-3 rounded-xl font-bold  '>Get Started</button>
        </div>

        {/* right */}
        <div data-aos="flip-right" >
            <img className='w-[500px] flex justify-center items-center' src={home}></img>
        </div>

    </div>

     <div className=' flex flex-col justify-center gap-6 items-center mt-[7%]'>


         <div data-aos="flip-left" className='flex  flex-col justify-center items-center '>
            <h1  className='md:text-[3.2rem] text-[1.5rem] font-[500]'>How to Post Items</h1>
            <div className='border-b border-4 w-full rounded-lg border-button'></div>
         </div>

         <div className='flex mt-4 md:flex-row flex-col md:gap-4 gap-5 justify-center items-center w-[80%]'>
              <div data-aos="flip-right" className='flex hover:shadow-2xl p-3 shadow-slate-600 flex-col gap-3 justify-center items-center'>
                  <div className='w-[70px] h-[70px] rounded-full bg-button p-3 flex justify-center items-center'>
                     <AiOutlineUserAdd style={{ width: '60px', height: '60px' }}/>
                  </div>
                <h3 className='md:text-[1.5rem] text-[1.2rem] font-bold '>Step 1: Register with us</h3>
                <p className='text-center font-[400] text-[#514F4F] '>Don't know how to deal with lost or found items near you? Register with your name and email address. If you have registered already, you can use the same account for posting unlimited ads.</p>
              </div>


              <div data-aos="flip-left" className='flex hover:shadow-2xl p-3 shadow-slate-600 flex-col gap-3 justify-center items-center'>
                <div className='w-[70px] h-[70px] rounded-full bg-button p-3 flex justify-center items-center'>
                    <GoVerified  style={{ width: '60px', height: '60px' }}/>
                </div>
                <h3 className='md:text-[1.5rem] text-[1.2rem] font-bold '>Step 2: Verify your account</h3>
                <p className='text-center font-[400] text-[#514F4F] '>Confirm your registration through the verification link which has sent to the given email address and then you can manage the account details now. Use either username or email address for login to your account.</p>
              </div>


              <div data-aos="flip-left" className='flex hover:shadow-2xl p-3 shadow-slate-600 flex-col gap-3 justify-center items-center'>
                  <div className='w-[70px] h-[70px] rounded-full bg-button p-3 flex justify-center items-center'>
                      <MdPostAdd style={{ width: '60px', height: '60px' }}/>
                  </div>
                <h3 className='md:text-[1.5rem] text-[1.2rem] font-bold '>Step 3: Start reporting</h3>
                <p className='text-center font-[400] text-[#514F4F] '>You can start creating the items for the lost or found items now to claim the item or hand over it to the rightful owner. Once done, we will post the items on the large community where everybody can potentially take action in searching for what you have lost.</p>
              </div>
         </div>
     </div>
                
         <About/>
         <div className='border-b-2'></div>
         <ContactUs/>

    </div>
  )
}
