import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function SignForm(props) {
  const setIsLoggedIn = props.setIsLoggedIn;
    const setFooter = props.setFooter;
  const navigate = useNavigate();
    const[password,setPassword] = useState(false);
    const[conpassword,setconPassword] = useState(false);
  const[formData,setFormData] = useState({
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    confirmPassword: ''
  })
  function changeHandler(event)
  {
    const{name,value} = event.target;
    setFormData((prev) => ({
      ...prev,
      [name] : value
    }))
  }
  function sumbiltHandler(event)
  {
    event.preventDefault();
        console.log(formData);
        
        if(formData.email == '' || formData.password == '')
        {
            toast.error("Haven't fill all !!");
            return;
        }
        else if(formData.password.length < 8)
        {
            toast.warning("password length should be greater than 8");
            return;
        }
        if(formData.password != formData.confirmPassword)
        {
          toast.error("password not matching");
          return;
        }
        toast.success("Sign Up Successfully !!!");
        setIsLoggedIn(true);
        setFooter(true);
        navigate("/Home");
  }
  return (
    <div>
      <form className='flex mt-[8%] flex-col w-[80%] gap-9 justify-center mx-auto items-center' onSubmit={sumbiltHandler} >
        <label className='w-[90%] flex justify-center items-center gap-4 mx-auto'>
          <input  className='md:w-[70%] md:text-[20px] text-[16px] placeholder:text-black text-black font-[400] w-full shadow-xl focus:outline-none focus:ring focus:border-blue-300 shadow-slate-500 bg-tranparent border-2 border-spacing-3 rounded-full p-4 backdrop-blur-lg '
          type='text'
          name='firstName'
          value={formData.firstName}
          onChange={changeHandler}
          placeholder='Enter Your FirstName'
          >

          </input>
          
        </label>

        <label className='w-[90%] flex justify-center items-center gap-4 mx-auto'>
          <input  className='md:w-[70%] md:text-[20px] text-[16px] placeholder:text-black text-black font-[400] w-full shadow-xl focus:outline-none focus:ring focus:border-blue-300 shadow-slate-500 bg-tranparent border-2 border-spacing-3 rounded-full p-4 backdrop-blur-lg '
          type='text'
          name='lastName'
          value={formData.lastName}
          onChange={changeHandler}
          placeholder='Enter Your Last Name'
          >

          </input>
          
        </label>


        <label className='w-[90%] flex justify-center items-center gap-4 mx-auto'>
          <input  className='md:w-[70%] md:text-[20px] text-[16px] placeholder:text-black text-black font-[400] w-full shadow-xl focus:outline-none focus:ring focus:border-blue-300 shadow-slate-500 bg-tranparent   border-2 border-spacing-3 rounded-full p-4 backdrop-blur-lg '
          type='email'
          name='email'
          value={formData.email}
          onChange={changeHandler}
          placeholder='Enter Your Email'
          >

          </input>
          
        </label>

        <div className='flex flex-col gap-4 justify-center items-center'>
        <label className='w-[90%] flex justify-center items-center gap-4 mx-auto'>
            <input className='md:w-[70%] md:text-[15px] text-[16px] placeholder:text-black text-black  font-[400] w-full shadow-xl focus:outline-none focus:ring focus:border-blue-300 shadow-slate-500 bg-tranparent border-2 border-spacing-3 rounded-full p-4 backdrop-blur-lg '
             type= {password ? ("text") : ("password")}
            value={formData.password}
            name='password'
            onChange={changeHandler}
            placeholder='ENTER YOUR PASSWORD' 
              
              ></input>
              
              <span className='focus:border-blue-300 shadow-slate-500 bg-tranparent border-2 border-spacing-3 rounded-full p-4 backdrop-blur-lg' onClick={() => setPassword((prev) => !prev)} >
                {password ? (<AiOutlineEyeInvisible style={{width:'30px', height:'30px'}}  />) : (<AiOutlineEye style={{width:'30px', height:'30px'}}  />) }
            </span>
        </label>

        <label className='w-[90%] flex justify-center items-center gap-4 mx-auto'>
            <input className='md:w-[70%] md:text-[15px]  text-[16px] placeholder:text-black text-black font-[400] w-full shadow-xl focus:outline-none focus:ring focus:border-blue-300 shadow-slate-500 bg-tranparent border-2 border-spacing-3 rounded-full p-4 backdrop-blur-lg '
             type= {conpassword ? ("text") : ("password")}
            value={formData.confirmPassword}
            name='confirmPassword'
            onChange={changeHandler}
            placeholder='RE-ENTER YOUR PASSWORD' 
              
              ></input>
              
              <span className='focus:border-blue-300 shadow-slate-500 bg-tranparent border-2 border-spacing-3 rounded-full p-4 backdrop-blur-lg' onClick={() => setconPassword((prev) => !prev)} >
                {conpassword ? (<AiOutlineEyeInvisible style={{width:'30px', height:'30px'}}  />) : (<AiOutlineEye style={{width:'30px', height:'30px'}}  />) }
            </span>
        </label>
        </div>
        <button  type='submit' className='bg-button  hover:bg-blue-400 shadow-xl text-white p-3 w-[120px] text-[22px] rounded-xl font-bold  '>Sign Up</button>
        <div className='w-full  border-b-4'></div>
        <button  type='submit' className='bg-slate-400  hover:bg-blue-400 shadow-xl text-white p-3 w-[240px] text-[22px] rounded-xl font-bold  '>Sign Up with Google</button>
      </form>
    </div>
  )
}
