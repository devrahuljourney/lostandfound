import React from 'react'
import {CiLocationOn} from 'react-icons/ci';
import {BiTimeFive} from 'react-icons/bi';
import  { useState } from 'react';
export default function Card({item}) {
    const maxLength = 40; // Set your desired maximum length here
    const [showFullDescription, setShowFullDescription] = useState(false);
  
    var description = showFullDescription ? item.description : `${item.description.slice(0, maxLength)}...`;
  
    const toggleFullDescription = () => {
      setShowFullDescription(!showFullDescription);}
    const handleEmailClick = () => {
        window.location.href = `mailto:${item.contactInfo}`;
      };
  return (
    <div className='flex flex-col  justify-center items-center   '  >
        <div className='bg-slate-300 shadow-md shadow-black rounded-lg  md:w-[80%]  flex flex-col gap-4'> 
        <div className='w-full h-[50%]  '>
            <img className='object-cover w-full h-full'  src={item.image} />
        </div>
        <div className='flex w-full   p-3 flex-col gap-3 justify-center items-start'>
            
            <div className='w-full px-4 flex flex-row justify-between items-center'>
               <p className='text-[1.1rem] font-bold ' >{item.title}</p>
               <p
                  className={`${
                  item.type === 'Lost' ? 'bg-red-500' : 'bg-blue-500'
                  } shadow-xl text-white p-3 w-[50px] h-[30px] flex justify-center items-center text-[16px] text-center rounded-xl font-bold`}
                 >
                   {item.type}
                </p>

               
            </div>
            <div className='text-gray-700  font-[500]'>
      <p>{description}  {item.description.length > maxLength && (
        <button className='text-blue-500' onClick={toggleFullDescription}>
          {showFullDescription ? "Read Less" : "Read More"}
        </button>
      )}</p>
      
    </div>
  
            

            <div className='flex flex-row w-full justify-between'>
                <div className='flex flex-row text-blue-600 justify-center items-center gap-2'>
                    <CiLocationOn/>
                    <p> {item.location} </p>

                </div>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <BiTimeFive/>
                    <p> {item.date} </p>
                </div>
            </div>
            <div className='font-[600] text-blue-700 underline cursor-pointer'>
            <a href={`mailto:${item.contactInfo}`} onClick={handleEmailClick}>
              {item.contactInfo}
              </a>
            </div>
             
        </div>

        </div>
    </div>
  )
}
