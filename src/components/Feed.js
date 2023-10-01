import React from 'react';
import LostAndFound from './LostAndFound';
import Items from './Items';
import { lostAndFoundData } from '../data';
import { useNavigate } from 'react-router-dom';

export default function Feed(props) {
  const dark = props.dark;
  const isLoggedIn = props.isLoggedIn;
  const navigate = useNavigate();
  const allItems = lostAndFoundData.flatMap(category => category.item);
  const customGradientStyles = {
    background: 'radial-gradient(188.78% 94.89% at 0.87% 7.36%, #C3C6FF 0%, rgba(182, 184, 241, 0.46) 78.95%, rgba(255, 255, 255, 0.12) 100%)',
  };
  return (
    <div className={` ${dark ? 'bg-black text-white' : ''} mx-auto md:mt-[5%] flex-col justify-center items-center mt-[10%] w-full`} style={dark ? null : customGradientStyles}>
      <>
          <div>
            <LostAndFound />
          </div>
          <div className='w-[80%] p-4 flex-col justify-center mx-auto items-center'>
            <div data-aos="flip-left" className='flex flex-col justify-center items-center '>
              <h1 className='md:text-[3.2rem] text-[1.5rem] font-[500]'>Recents post</h1>
              <div className='border-b border-4 w-full rounded-lg border-button'></div>
            </div>
            <div>
              <Items items={allItems} />
            </div>
          </div>
        </>
    </div>
  )
}
