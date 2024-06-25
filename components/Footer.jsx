import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full flex h-[583px] bg-[#263341] p-10 pt-20">
      <div className="w-1/2 text-white">
        <span className="text-[24px] font-[700]">Book a Demo</span>
        <p className="text-[20px] font-[400] font-[Open Sans] pb-4 pt-4">
          We would love to give you a quick demo of how Aurae.ai can help your
          health better. Reach out to us by filling the form below{" "}
        </p>
        <form action="">
          <div className="flex flex-col ">
            <div className="flex justify-between gap-[40px]">
              <input
                placeholder="First Name"
                className="h-[64px] text-black outline-none p-3 text-[16px] font-[250] w-1/2 rounded-[8px]"
                type="text"
              />
              <input
                placeholder="Email Address"
                className="h-[64px] text-black outline-none p-3 text-[16px] font-[250] w-1/2 rounded-[8px]"
                type="text"
              />
            </div>

            <input
              placeholder="Leave a message"
              className="mt-[30px] text-black outline-none p-3 text-[16px] font-[250] h-[116px] rounded-[8px] "
              type="text"
            />
          </div>
        </form>
        <button className="text-[#263341] font-[500] text-[22px] bg-white w-[590px] h-[53px] rounded-[28px] mt-[30px]">
          Book a demo
        </button>
      </div>
      <div className="w-1/4 flex flex-col gap-8 pl-[65px] text-white">
        <span className="font-[400] text-[24px] ">Quick Links</span>
        <p className="font-[400] text-[16px] ">Solutions</p>
        <p className="font-[400] text-[16px] ">Blogs</p>
        <p className="font-[400] text-[16px] ">Contact Us</p>
      </div>
      <div className="w-1/4">
        <div className="icons pt-3 flex gap-6 text-white text-xl">
          <FaFacebookF/>
          <FaInstagram/>
          <FaTwitter/>
          <FaFacebook/>
        </div>
        <div className="address text-[16px] mt-8 text-white font-[400]">
        Awfis Andheri, Mumbai, India <br/>
        +91 62 345 67 89 <br/>
        companyname@mail.com
        </div>
        <div className="logo"></div>
      </div>
    </div>
  );
};

export default Footer;
