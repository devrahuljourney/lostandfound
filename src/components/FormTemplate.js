import React from 'react'
import LoginForm from './LoginForm';
import SignForm from './SignForm';
import login from '../assests/login.svg'
export default function FormTemplate(props) {
    const customGradientStyles = {
      background:
        'radial-gradient(188.78% 94.89% at 0.87% 7.36%, #C3C6FF 0%, rgba(182, 184, 241, 0.46) 78.95%, rgba(255, 255, 255, 0.12) 100%)',
    };
    
    return (
      <div className={` ${props.dark ? 'bg-black text-white' : ''} md:mt-[6%] mt-[12%] w-full  flex  justify-center items-center `} style={props.dark ? null : customGradientStyles}>
        <div className='flex flex-col-reverse md:flex-row gap-7 w-[80%] justify-evenly items-center mx-auto'>
            <div className='md:w-[70%] w-full'>
              {props.formType === "login" ? <LoginForm setFooter = {props.setFooter} setIsLoggedIn={props.setIsLoggedIn} /> : <SignForm />}
            </div>
            <div className='md:w-[50%]  w-full'>
              <img src={login} width={600} height={600} />
            </div>    
        </div>
      </div>
    )
  }
  