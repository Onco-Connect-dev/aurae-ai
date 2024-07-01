import React from "react";
import img from "../public/why.png";
import Image from "next/image";
const WhyAuraeAI = () => {
  return (
    <div className=" w-full overflow-x-hidden h-[775px] pl-10 pr-10 lg:pl-20 lg:pr-20 bg-[#F8F8F899] flex flex-col lg:flex-row">
      <div className="w-full flex items-center lg:w-3/5 pl-5">
        <Image width={450} src={img} className="rounded-[25px]" />
      </div>
      <div className="w-[2px] h-[45%] 2xl:h-[42%] mt-60 2xl:mt-64 mr-[-18px] bg-custom-gradient">

      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-12 pt-[10%]">
      <p className="text-[40px] font-[650] text-[#0E3768]">Why Aurae.ai ?</p>
        <div className="flex gap-1">
          <div className="w-[33px] mt-2 mr-3 h-[33px] rounded-full bg-[#FF8048] p-2">
            <div className="w-[17px] h-[17px] rounded-full bg-white"></div>
          </div>
          <p className="text-[18.5px] font-[500] w-[85%]">
            Monitor your health anytime, anywhere. Compatible with smartphones,
            tablets, and laptops for continuous use
          </p>
        </div>
        <div className="flex gap-1">
          <div className="w-[33px] mt-2 mr-3 h-[33px] rounded-full bg-[#FF8048] p-2">
            <div className="w-[17px] h-[17px] rounded-full bg-white"></div>
          </div>
          <p className="text-[18.5px] font-[500] w-[85%]">
            Provides precise measurements of vital signs like heart rate and
            blood pressure for reliable health insights
          </p>
        </div>
        <div className="flex gap-1">
          <div className="w-[33px] mt-2 mr-3 h-[33px] rounded-full bg-[#FF8048] p-2">
            <div className="w-[17px] h-[17px] rounded-full bg-white"></div>
          </div>
          <p className="text-[18.5px] font-[500] w-[85%]">
            Enjoy an intuitive interface that makes tracking your health simple
            and effortless.
          </p>
        </div>
        <div className="flex gap-1">
          <div className="w-[33px] mt-2 mr-3 h-[33px] rounded-full bg-[#FF8048] p-2">
            <div className="w-[17px] h-[17px] rounded-full bg-white"></div>
          </div>
          <p className="text-[18.5px] font-[500] w-[85%]">
            Easily integrates with existing applications, enhancing your health
            data management capabilities
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyAuraeAI;
