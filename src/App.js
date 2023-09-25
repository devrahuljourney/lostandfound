import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Feed from './components/Feed';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useState } from 'react';
function App() {
  const[footer,setFooter] = useState(true);
  return (
    <div>
      {/* Use BrowserRouter */}
         <NavBar footer = {footer} setFooter = {setFooter} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
        <div>
          {
            footer ? (<Footer/>) : (null)
          }
        </div>
        
    </div>
  );
}

export default App;
