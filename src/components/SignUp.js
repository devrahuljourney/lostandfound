import React from 'react'
import FormTemplate from './FormTemplate';
export default function SignUp(props) {
  const dark = props.dark;
   const setIsLoggedIn = props.setIsLoggedIn;
   const setFooter = props.setFooter;
  return (
    <div>
      <FormTemplate setIsLoggedIn={setIsLoggedIn} setFooter = {setFooter} dark = {dark} formType = "signup" />
    </div>
  )
}
