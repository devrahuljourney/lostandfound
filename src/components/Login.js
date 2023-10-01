import React from 'react'
import FormTemplate from './FormTemplate';
import LoginForm from './LoginForm';
export default function Login(props) {
   const dark = props.dark;
   const setIsLoggedIn = props.setIsLoggedIn;
   const setFooter = props.setFooter;
   
  return (
    <div>
    
      <FormTemplate  setIsLoggedIn={ setIsLoggedIn} setFooter = {setFooter} dark = {dark} formType = "login" />
    </div>
  )
}
