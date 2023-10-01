import React from 'react'

export default function LostAndFound() {
  return (
    <div className='flex p-[20px] md:flex-row flex-col gap-4 mt-[5%] justify-evenly items-center w-[80%]'>
        <div className=' flex flex-row justify-center md:justify-evenly items-center gap-8 p-4 mt-[10%] md:mt-[5%]'>
        <button  className='bg-button  hover:bg-blue-400 shadow-xl text-white p-3 md:w-[190px] w-[150px] text-[22px] rounded-xl font-bold  '>Post Item</button>
        <button  className='bg-button  hover:bg-blue-400 shadow-xl text-white p-3 md:w-[190px] w-[150px] text-[22px] rounded-xl font-bold  '>Found Item</button>
        </div>
        <div></div>
    </div>
  )
}
