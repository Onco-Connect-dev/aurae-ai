import Image from "next/image";
import React from "react";
import img from "../public/whatsnew.jpeg";
import rightArrow from "../public/arrow-white.png"
function WhatsNew() {
  return (
    <div className="pb-20">
      <p className="text-[48px] mb-10 text-center w-screen font-semibold">
        What’s new at Aurae.ai?
      </p>
      <div className="flex justify-between">
        <div className="w-1/2 pl-10">
          <p className="text-[38px] pt-5 font-medium leading-[60px]">Discover how health impacts employees at work.</p>
          <p className="font-[450] mt-4 mb-4 text-[20px] w-3/4">
            Aurae.ai engages your employees to understand the impact of health
            on their work life balance and what they can do mitigate these
            issues
          </p>
          <button className="bg-black mt-7 flex justify-around p-4 text-white w-[280px] rounded-[50px] h-[52px]">Read all Acticles <Image className="p-2" src={rightArrow} /> </button>
        </div>
        <div className="w-1/2">
          <Image src={img} />
        </div>
      </div>
    </div>
  );
}

export default WhatsNew;
