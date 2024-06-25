import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full text-black font-[400] font-[poppins] text-[20px] pl-10 pr-10 pt-[22px] pb-[22px] flex justify-between space-x-8'>
      <div>
        Logo
      </div>
      <div className='flex justify-between gap-[80px]'>
        <Link href="/">Home</Link>
        <Link href="/solutions">Our Solutions</Link>
        <Link href="/blogs" >Blogs</Link>
        <Link href="/contactUs" >Contact us</Link>
      </div>
    </div>
  )
}

export default Header
