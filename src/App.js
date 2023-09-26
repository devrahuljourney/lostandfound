import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Feed from './components/Feed';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import ContactUs from './components/ContactUs';

function App() {
  const[footer,setFooter] = useState(true);
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
        <NavBar footer={footer} setFooter={setFooter} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <div>{footer ? <Footer /> : null}</div>
      </div>
   
  );
}

export default App;
