import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Feed from './components/Feed';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import NavBar from './components/NavBar';
function App() {
  return (
    <div>
      {/* Use BrowserRouter */}
         <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
        <div>
          hello
        </div>
        
    </div>
  );
}

export default App;
