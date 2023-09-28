import React from 'react'
import {SlSocialTwitter} from 'react-icons/sl';
import {SlSocialLinkedin} from 'react-icons/sl';
import {SlSocialInstagram} from 'react-icons/sl';
import {SlSocialFacebook} from 'react-icons/sl';
import {SlSocialYoutube} from 'react-icons/sl';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function 
(props) {
    const dark = props.dark;
  return (
    <div className={`${dark ? 'bg-black' : 'bg-white' } w-full flex flex-col gap-8 p-9 mt-6 justify-center items-center mx-auto`}>
        <h1 data-aos="flip-right" className='md:text-[3.1rem] text-[1.3rem] font-bold  ' >Connect Us</h1>
        <div className='flex w-[60%] flex-col md:flex-row justify-between items-center gap-7'>
            <div data-aos="flip-left" className='w-[80px] hover:text-white text-[#C13584] h-[80px] border-2 p-5  flex justify-center  hover:cursor-pointer  items-center shadow-lg shadow-slate-700 border-black hover:bg-[#C13584] rounded-full '>
                <a src='#' className='w-[40px]  text-center '> <SlSocialInstagram style={{ width: '40px', height: '40px' }} /> </a>
            </div>
            <div data-aos="flip-right" className='w-[80px] hover:text-white text-[#1778F2] h-[80px] border-2 p-5  flex justify-center  hover:cursor-pointer  items-center shadow-lg shadow-slate-700 border-black hover:bg-[#1778F2] rounded-full '>
                <a src='#' className='w-[40px]  text-center '> <SlSocialFacebook style={{ width: '40px', height: '40px' }}/> </a>
            </div>
            <div data-aos="flip-left" className='w-[80px] hover:text-white text-[#0077b5] h-[80px] border-2 p-5  flex justify-center  hover:cursor-pointer  items-center shadow-lg shadow-slate-700 border-black hover:bg-[#0077b5] rounded-full '>
                <a src='#' className='w-[40px]  text-center '> <SlSocialLinkedin style={{ width: '40px', height: '40px' }}/> </a>
            </div>
            <div data-aos="flip-right" className='w-[80px] hover:text-white text-[#1DA1F2] h-[80px] border-2 p-5  flex justify-center  hover:cursor-pointer  items-center shadow-lg shadow-slate-700 border-black hover:bg-[#1DA1F2] rounded-full '>
                <a src='#' className='w-[40px]  text-center '> <SlSocialTwitter style={{ width: '40px', height: '40px' }}/> </a>
            </div>
            <div data-aos="flip-left" className='w-[80px] hover:text-white text-[#FF0000] h-[80px] border-2 p-5  flex justify-center  hover:cursor-pointer  items-center shadow-lg shadow-slate-700 border-black hover:bg-[#FF0000] rounded-full '>
                <a src='#' className='w-[40px]  text-center '> <SlSocialYoutube style={{ width: '40px', height: '40px' }}/> </a>
            </div>
        </div>
        <div className='flex mt-6 gap-3 flex-col w-full justify-center items-center'>
            <div className='w-full border-b-2'></div>
            <p className='text-[1.2rem] text-slate-500 ' >Copyright @  all right reserved</p>
        </div>
    </div>
  )
}
