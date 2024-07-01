"use client";

import React from "react";
import img1 from "../public/howwework1.png";
import img2 from "../public/howwework2.png";
import Image from "next/image";

const TransformsHealthMonitoring = () => {
  return (
    <div className="pt-20  w-full overflow-x-hidden">
      <p className="text-center text-[48px] mt-10 mb-4 font-[600]">
        <span className="text-[#DC7D57]">How</span>{" "}
        <span className=" text-gradient">Aurae.AI</span>{" "}
        <span className="text-[#DC7D57]">Transforms Health</span>
        <span className="text-[#0E3768]"> Monitoring</span>
        <span className="text-[#B9B9B9]"> ?</span>
      </p>
      <p className="text-center text-[#0E3768] text-[24px] mb-10 font-[500]">
        Quick, seamless integration for accurate health insights.
      </p>
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(
            90deg,
            #dc7d57 9.54%,
            #dc7d57 13.63%,
            #b46647 20.54%,
            #894e36 28.1%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
      <div className="flex pl-20 justify-center mb-8 items-center pr-20">
        <Image src={img1} />
      </div>

      <div className="flex pl-20 justify-center items-center pr-20">
        <Image src={img2} />
      </div>
    </div>
  );
};

export default TransformsHealthMonitoring;
