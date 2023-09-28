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
    function sumbiltHandler(event)
    {
        event.preventDefault();
        console.log(formData);
        if(formData.email == '' || formData.password == '')
        {
            toast.error("fill all details");
            return;
        }
        toast.success("Login Successfully !!!");
        setIsLoggedIn(true);
        setFooter(true);
        navigate("/Home");
    }
  return (
    <div>
        <form className='flex mt-[8%] flex-col w-[80%] gap-9 justify-center mx-auto items-center' onSubmit={sumbiltHandler}>
        <label data-aos="flip-left" className='w-[90%] flex justify-center items-center mx-auto'>
            <input className='md:w-[70%] md:text-[20px] text-[16px] text-slate-400 font-[400] w-full shadow-xl focus:outline-none focus:ring focus:border-blue-300 shadow-slate-500 bg-blue-100 bg-blur-lg border-2 border-spacing-3 rounded-full p-4 backdrop-blur-lg '
             type='text'
            value={formData.email}
            name='email'
            onChange={changehandler}
            placeholder='ENTER YOUR EMAIL' 
              
              ></input>
             
        </label>
        <label  className='w-[90%] flex justify-center items-center gap-4 mx-auto'>
            <input className='md:w-[70%] md:text-[20px] text-[16px] text-slate-400 font-[400] w-full shadow-xl focus:outline-none focus:ring focus:border-blue-300 shadow-slate-500 bg-blue-100 bg-blur-lg border-2 border-spacing-3 rounded-full p-4 backdrop-blur-lg '
             type= {password ? ("text") : ("password")}
            value={formData.password}
            name='password'
            onChange={changehandler}
            placeholder='ENTER YOUR PASSWORD' 
              
              ></input>
              
              <span className='focus:border-blue-300 shadow-slate-500 bg-blue-100 bg-blur-lg border-2 border-spacing-3 rounded-full p-4 backdrop-blur-lg' onClick={() => setPassword((prev) => !prev)} >
                {password ? (<AiOutlineEyeInvisible style={{width:'30px', height:'30px'}}  />) : (<AiOutlineEye style={{width:'30px', height:'30px'}}  />) }
            </span>
        </label>
        <button  type='submit' className='bg-button hover:bg-blue-400 shadow-xl text-white p-3 w-[120px] text-[22px] rounded-xl font-bold  '>Login</button>
        <div className='w-full border-b-2'></div>
        <p>already have an account ?? <span> <NavLink to='/signup' > Sign Up </NavLink> </span> </p>
        </form>
    </div>
  )
}
