import React from 'react'
import img from "../public/banner.png"
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='w-full overflow-x-hidden h-[635px] bg-[#D9D9D91F] flex justify-between pl-10 pb-10'>
      <div className='flex flex-col gap-10 w-1/2 pt-20'>
        <p className='text-[#5E5E5D] leading-normal text-2xl lg:text-[45px] font-bold lg:font-[700]'>Digital health <br/> screening & remote <br/> health monitoring</p>
        <button className='text-white w-2/3 lg:w-[300px] shadow-md h-[50px] rounded-full bg-[#3B4753] text-xl lg:text-[22px]'>Book a demo</button>
      </div>
      <div className='w-1/2 pt-20 relative'>
        <div className='bg-[#FA8A59] w-[500px] h-[500px] absolute rounded-full top-[10px] left-[260px] z-0'></div>
        <Image src={img} className='w-[450px] rounded-[28px] z-10 relative'/>
      </div>
    </div>
  )
}

export default Banner
