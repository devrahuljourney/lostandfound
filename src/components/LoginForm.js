import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function LoginForm(props) {
    const setIsLoggedIn = props.setIsLoggedIn;
    const setFooter = props.setFooter;
    const[formData,setFormData] = useState({
        email:"",
        password:""
    });
    const navigate = useNavigate();
    const[password,setPassword] = useState(false);
    function changehandler(event)
    {
        const {name,value} = event.target;
        setFormData((prev) => ({
            ...prev,
            [name] : value,
        }))

    }
    function sumbiltHandler(event) {
        event.preventDefault();
        console.log(formData);
      
        if (formData.email === '' || formData.password === '') {
          toast.error("Haven't filled all fields!!");
          return;
        }
        else // Example password complexity check
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(formData.password)) {
          toast.warning("Password must have number, capital and small letter and be at least 8 characters long.");
          return;
        }
        
        
        else if (formData.password.length < 8) {
          toast.warning("Password length should be greater than 8");
          return;
        }
      
        toast.success("Login Successfully !!!");
        setIsLoggedIn(true);
        setFooter(true);
        // console.log('feed trying')
        // Check the value of 'feed' and navigate accordingly
        
          navigate("/Home");
      }
      
  return (
    <div>
        <form className='flex mt-[8%] flex-col w-[80%] gap-9 justify-center mx-auto items-center' onSubmit={sumbiltHandler}>
        <label data-aos="flip-left" className='w-[90%] flex justify-center items-center mx-auto'>
            <input className='md:w-[70%] md:text-[20px] text-[16px] placeholder:text-black text-black font-[400] w-full shadow-xl focus:outline-none focus:ring focus:border-blue-300 shadow-slate-500 bg-tranparent border-2 border-spacing-3 rounded-full p-4 backdrop-blur-lg '
             type='text'
            value={formData.email}
            name='email'
            onChange={changehandler}
            placeholder='ENTER YOUR EMAIL' 
              
              ></input>
             
        </label>
        <label className='w-[90%] flex justify-center items-center gap-4 mx-auto'>
            <input className='md:w-[70%] md:text-[20px] text-[16px] placeholder:text-black text-black font-[400] w-full shadow-xl focus:outline-none focus:ring focus:border-blue-300 shadow-slate-500 bg-tranparent border-2 border-spacing-3 rounded-full p-4 backdrop-blur-lg '
             type= {password ? ("text") : ("password")}
            value={formData.password}
            name='password'
            onChange={changehandler}
            placeholder='ENTER YOUR PASSWORD' 
              
              ></input>
              
              <span className='focus:border-blue-300 shadow-slate-500 bg-tranparent bg-blur-lg border-2 border-spacing-3 rounded-full p-4 backdrop-blur-lg' onClick={() => setPassword((prev) => !prev)} >
                {password ? (<AiOutlineEyeInvisible style={{width:'30px', height:'30px'}}  />) : (<AiOutlineEye style={{width:'30px', height:'30px'}}  />) }
            </span>
        </label>
        <button  type='submit' className='bg-button  hover:bg-blue-400 shadow-xl text-white p-3 w-[120px] text-[22px] rounded-xl font-bold  '>Login</button>
        <div className='w-full border-b-2'></div>
        <p>Create a new Account <span className='font-bold text-blue-500'> <NavLink to='/signup' > Sign Up </NavLink> </span> </p>
        </form>
    </div>
  )
}
