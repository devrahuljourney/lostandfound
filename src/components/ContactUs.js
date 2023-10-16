import React, { useState,useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function ContactUs(props) {
    useEffect(()=>{
        Aos.init({duration : 2000});
    },[])
    const dark = props.dark;
    const[formData,setFormData] = useState({
        Name:"",
        email:"",
        comment:""
    })
    function changeHandler(event)
    {
        const{name,type,value} = event.target;
        setFormData((prev)=>({
            ...prev,
            [name] : value
        }))
    }
    function submitHandler(event)
    {
        event.preventDefault();
        console.log(formData);
        console.log('contact us')
        console.log(dark);
    }
    
  return (
    
    <div  className= {` ${dark ? 'bg-black  text-white ' : ''} md:mt-[5%] mt-[10%]`}>

       <div data-aos="flip-right" className='flex flex-col justify-center mx-auto  gap-5 items-center w-[80%] p-7'>
        <p className='font-bold text-[1.1rem] '>Get In Touch</p>
        <p className='font-bold md:text-[3.6rem] text-[1.4rem]'>Contact Us</p>
        <div className='border-b  border-4 w-full rounded-lg border-button'></div>
       </div>

       <form className='flex mt-[8%] flex-col w-[80%] gap-9 justify-center mx-auto items-center' onSubmit={submitHandler}>
         <label data-aos="flip-left" className='w-[80%] flex justify-center items-center mx-auto'>
            <input className='md:w-[50%] md:text-[20px] text-[16px] text-slate-400 font-[400] w-full shadow-xl focus:outline-none focus:ring focus:border-blue-300 shadow-slate-500 bg-blue-100 bg-blur-lg border-2 border-spacing-3 rounded-full p-4 backdrop-blur-lg ' type='text' 
                name='Name'
                value={formData.Name}
                onChange={changeHandler}
                placeholder='ENTER YOUR FULL NAME'
            />
         </label>
        
         <label data-aos="flip-right" className='w-[90%] flex justify-center items-center mx-auto'>
            <input className='md:w-[70%] md:text-[20px] text-[16px] text-slate-400 font-[400] placeholder-center focus:outline-none focus:ring focus:border-blue-300   pl-4 pr-10  shadow-xl shadow-slate-500 w-full  bg-blue-100 bg-blur-lg border-2 border-spacing-3 rounded-full p-4 backdrop-blur-lg ' type='email' 
                name='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='ENTER YOUR EMAIL'
            />
         </label>
         <label data-aos="flip-right" className='w-[100%]  flex justify-center items-center mx-auto'>
            <textarea className='md:w-[90%] md:text-[20px] text-[16px] text-slate-400 font-[400] shadow-xl shadow-slate-500 w-full focus:outline-none focus:ring focus:border-blue-300 bg-blue-100 bg-blur-lg border-2 border-spacing-3 rounded-full p-4 backdrop-blur-lg ' type='text' 
                name='comment'
                value={formData.comment}
                onChange={changeHandler}
                placeholder='TYPE YOUR MESSAGE HERE'
            />
         </label>
         <button  type='submit' className='bg-button hover:bg-blue-400 shadow-xl text-white p-3 w-[120px] text-[22px] rounded-xl font-bold  '>send</button>
       </form>

    </div>
  )
}
