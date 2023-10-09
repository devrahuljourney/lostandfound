import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Feed from './components/Feed';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import ContactUs from './components/ContactUs';
import {lostAndFoundData} from './data';
function App() {
  const[footer,setFooter] = useState(true);
  const[dark,setDark] = useState(false);
  const[isLoggedIn,setIsLoggedIn] = useState(false);
  // const[feed,setFeed] = useState(false);
  // Initialize the footer state from localStorage or default to true
  // const [footer, setFooter] = useState(() => {
  //   const savedFooter = localStorage.getItem('footer');
  //   return savedFooter ? JSON.parse(savedFooter) : true;
  // });

  // // Get the navigate function from React Router
  // const navigate = useNavigate();

  // // Update localStorage and the state when the footer state changes
  // useEffect(() => {
  //   localStorage.setItem('footer', JSON.stringify(footer));
  // }, [footer]);

  return (
   
      <div className="">
        {/* Pass footer and setFooter as props to NavBar */}
        <NavBar dark = {dark}  setDark ={setDark} isLoggedIn ={isLoggedIn} setIsLoggedIn = {setIsLoggedIn}  footer={footer} setFooter={setFooter} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login dark = {dark}  setFooter ={setFooter} isLoggedIn ={isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp dark = {dark} setFooter ={setFooter} isLoggedIn ={isLoggedIn} setIsLoggedIn = {setIsLoggedIn}  />} />
          <Route path="/F̥eed" element={<Feed dark = {dark}  lostAndFoundData = {lostAndFoundData} isLoggedIn={isLoggedIn} />} />
          <Route path="/about" element={<div className="p-[5%]"><About dark = {dark} /></div>} />
          <Route path="/contactus" element={<div className="p-[5%]"><ContactUs dark = {dark} /></div>} />

        </Routes>
        <div>{footer ? <Footer dark = {dark}  /> : null}</div>
      </div>
   
  );
}

export default App;
