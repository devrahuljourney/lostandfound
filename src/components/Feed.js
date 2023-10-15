import React, { useState } from 'react';
import LostAndFound from './LostAndFound';
import Items from './Items';
import { lostAndFoundData } from '../data';
import { useNavigate } from 'react-router-dom';

export default function Feed(props) {
  const[lostFound,setLostFound] = useState([]);
  console.log("lost and found data " , lostFound)
  const dark = props.dark;
  const isLoggedIn = props.isLoggedIn;
  const navigate = useNavigate();
  const allItems = lostAndFoundData.flatMap(category => category.item);
  const customGradientStyles = {
    background: 'radial-gradient(188.78% 94.89% at 0.87% 7.36%, #C3C6FF 0%, rgba(182, 184, 241, 0.46) 78.95%, rgba(255, 255, 255, 0.12) 100%)',
  };

  // Check if the user is not logged in
  if (!isLoggedIn) {
    return (
      <div className={` ${dark ? 'bg-black text-white' : ''} mx-auto md:mt-[5%] flex-col justify-center items-center mt-[9%] w-full`} style={dark ? null : customGradientStyles}>
       
        <p className=' bg-transparent backdrop-blur-lg shadow-2xl shadow-[box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;] z-10 p-4 md:p-9 flex absolute md:right-[50%] right-[20%] top-[50%] gap-2 text-[1.5rem] justify-center items-center' >Please <span onClick={() => navigate("/login")} className="text-blue-500 cursor-pointer"> log in </span> to access the Feed.</p>
      </div>
    );
  }

  // If the user is logged in, render the Feed content
  return (
    <div className={` ${dark ? 'bg-black text-white' : ''} mx-auto md:mt-[5%] flex-col justify-center items-center mt-[10%] w-full`} style={dark ? null : customGradientStyles}>
      <div>
        <LostAndFound lostFound={lostFound} setLostFound={setLostFound} />
      </div>
       
      <div className='w-[80%] p-4 flex-col justify-center mx-auto items-center'>
        <div data-aos="flip-left" className='flex flex-col justify-center items-center '>
          <h1 className='md:text-[3.2rem] text-[1.5rem] font-[500]'>Recents post</h1>
          <div className='border-b border-4 w-full rounded-lg border-button'></div>
        </div>
        <div>
          <Items items={lostFound} />
        </div>
      </div>

      <div className='w-[80%] p-4 flex-col justify-center mx-auto items-center'>
        
        <div>
          <Items items={allItems} />
        </div>
      </div>
    </div>
  );
}
