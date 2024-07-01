import Image from "next/image";
import React from "react";
import img from "../public/whatsnew.jpeg";
import rightArrow from "../public/arrow-white.png";

function WhatsNew() {
  return (
    <div className="pb-20 pt-20 w-full overflow-x-hidden pr-20 pl-20" >
      <p className="text-[32px] md:text-[48px] mb-10 text-center w-full font-semibold">
        What’s new at Aurae.ai?
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 px-4 ">
          <p className="text-[28px] md:text-[38px] pt-5 font-medium leading-[40px] md:leading-[60px]">
            Discover how health impacts employees at work.
          </p>
          <p className="font-[450] mt-4 mb-4 text-[16px] md:text-[20px] w-full md:w-3/4">
            Aurae.ai engages your employees to understand the impact of health
            on their work-life balance and what they can do to mitigate these
            issues.
          </p>
          <button className="bg-black mt-7 flex justify-around items-center p-4 text-white w-full md:w-[280px] rounded-[50px] h-[52px]">
            Read all Articles <Image className="p-2" src={rightArrow} alt="Right Arrow" />
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex items-center mt-8 justify-center bg-cover">
          <Image width={450} src={img} alt="What's New" />
        </div>
      </div>
    </div>
  );
}

export default WhatsNew;
