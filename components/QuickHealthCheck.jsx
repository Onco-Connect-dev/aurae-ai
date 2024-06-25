import React from "react";

export default function QuickHealthCheck() {
  return (
    <div className="bg-white w-screen pt-20">
      <div className="bg-[#F2F6FA] font-playfair flex justify-between text-nowrap pl-[65px] pr-[100px] w-full">
        <p className="text-[#21201FCC] text-[30px] font-[600]">
          Aurae is partnering with leading organisations in India & APAC
        </p>
        <button className="text-[white] text-[22px] font-[500] w-[205px] bg-[#263341] rounded-full">
          Speak to us
        </button>
      </div>
      <div className="w-full">
        <div className="w-7/12">
          <p>Quick health check in 30 seconds</p>
          <p>
            Experience the convenience of Aurae.AI’s contactless health
            assessment. Using advanced imaging, our tool analyzes light
            reflected from blood flow beneath your skin, delivering a
            comprehensive health report in 30 seconds. Get detailed metrics like
            heart rate and make proactive health decisions, fully integrated
            with your telehealth tools.
          </p>
        </div>
        <div className="w-5/12"></div>
      </div>
    </div>
  );
}
