"use client"

import React, {useEffect} from 'react'

function page() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="w-screen flex flex-col  lg:flex-row justify-between pb-20 pl-10 lg:pl-[160px] pt-[110px]">
        <div className="w-full lg:w-1/2  flex flex-col gap-10 ">
          <p className="text-[24px] font-[700]">Contact us</p>
          <p className="text-[16px] font-[400] w-[91%]">
            Get an insightful demonstration of all that Auraeai has to offer to
            you or your organization. Fill in your details so that our team can
            reach out to you at the earliest{" "}
          </p>
          <div className="flex gap-2">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.9691 5.2984H4.03088C1.80835 5.2984 0 7.10675 0 9.32928V23.6707C0 25.8933 1.80835 27.7016 4.03088 27.7016H28.9691C31.1916 27.7016 33 25.8933 33 23.6707V9.32972C33.0004 7.10675 31.1921 5.2984 28.9691 5.2984ZM26.9995 7.92809L16.5 14.6925L6.00052 7.92809H26.9995ZM28.9691 25.0724H4.03088C3.25819 25.0724 2.62969 24.4434 2.62969 23.6712V9.40423L15.6887 17.8017C15.7063 17.8127 15.7251 17.8201 15.7431 17.8302C15.7619 17.8407 15.7812 17.8508 15.8005 17.8604C15.9017 17.9126 16.0061 17.9547 16.1126 17.9823C16.1235 17.9853 16.1345 17.9867 16.1454 17.9893C16.2624 18.0169 16.3808 18.034 16.4991 18.034H16.5C16.5009 18.034 16.5018 18.034 16.5018 18.034C16.6201 18.034 16.7384 18.0173 16.8554 17.9893C16.8664 17.9867 16.8774 17.9853 16.8883 17.9823C16.9948 17.9547 17.0987 17.9126 17.2004 17.8604C17.2197 17.8508 17.2389 17.8407 17.2578 17.8302C17.2758 17.8201 17.2946 17.8127 17.3121 17.8017L30.3712 9.40423V23.6707C30.3707 24.4434 29.7418 25.0724 28.9691 25.0724Z"
                fill="#FF8048"
              />
            </svg>

            <p className="text-[20px] font-[700] text-[#FF8048]">
              hello@aurae.ai.com
            </p>
          </div>
          <p>For customer support/ appointment related queries:</p>
        </div>
        <div className="w-full lg:w-1/2 ">
          <form className="mr-20 h-[350px] w-[80%] p-5 pt-10 rounded-[10px] bg-[#F2F6FA]">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full outline-none rouned-[8px] p-3 mb-4 rounded  focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full outline-none rouned-[8px] p-3 mb-4 rounded focus:outline-none "
              />
            </div>
            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                placeholder="India +91"
                className="w-1/3 p-3 outline-none rouned-[8px] rounded focus:outline-none "
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-2/3 p-3 outline-none rouned-[8px]   focus:outline-none"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-3 rounded-[10px] bg-orange-500 text-white font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
