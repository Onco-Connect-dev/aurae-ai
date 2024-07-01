import React from 'react'
import img from "../public/banner.png"
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='w-full overflow-x-hidden h-[635px] bg-[#D9D9D91F] flex justify-between pl-20 pb-10'>
      <div className='flex flex-col gap-10 w-1/2 pt-20'>
        <p className='text-[#5E5E5D] leading-normal text-2xl lg:text-[45px] font-bold lg:font-[700]'>Digital health screening & <br/> remote  health monitoring</p>
        <button className='text-white w-2/3 lg:mt-20 lg:w-[300px] shadow-md h-[50px] rounded-full bg-[#3B4753] text-xl lg:text-[22px]'>Book a demo</button>
      </div>
      <div className='w-1/2 pt-16 relative'>
        <div className='bg-[#FA8A59] w-[450px] h-[450px] absolute rounded-full top-[7%] left-[50%] z-0'></div>
        <Image src={img} className='w-[550px] rounded-[28px] z-10 relative'/>
      </div>
    </div>
  )
}

export default Banner
