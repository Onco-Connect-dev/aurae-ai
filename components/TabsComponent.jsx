"use client";
import Image from "next/image";
import React, { useState } from "react";
import img1 from "../public/tab1.png";
import img2 from "../public/tab2.png";
import img4 from "../public/tab4.png";


const TabsComponent = () => {
  const [selectedTab, setSelectedTab] = useState("Insurance");

  const tabs = [
    {
      title: "Insurance",
      description:
        "Enhance insurance underwriting and risk assessment with Aurae.AI’s real-time health data. Gain precise insights into policyholders' health, improving decision-making accuracy and premium determination for better policy management.",
      image: img1,
      bgColor: "bg-[#F2F6FA]",
    },
    {
      title: "Pharmacy",
      description:
        "Enhance insurance underwriting and risk assessment with Aurae.AI’s real-time health data. Gain precise insights into policyholders' health, improving decision-making accuracy and premium determination for better policy management.",
      image: img2,
      bgColor: "bg-[#FFEFE2]",
    },
    {
      title: "Healthcare",
      description:
        "Implement Aurae.AI’s technology for comprehensive patient monitoring. Improve diagnosis, treatment plans, and patient care with accurate, real-time health data and actionable insights, enhancing overall healthcare delivery.",
      image: img4,
      bgColor: "bg-[#BFDDCB80]",
    },
    {
      title: "Employers",
      description:
        "Promote workplace wellness with Aurae.AI’s monitoring solutions. Track employee health metrics, boost productivity, and foster a healthier, more engaged workforce with real-time health insights and proactive wellness programs.",
      image: img4,
      bgColor: "bg-[#21201F]",
    },
  ];

  const currentTab = tabs.find((tab) => tab.title === selectedTab);

  return (
    <div className={`min-h-screen mt-40 ${currentTab.bgColor} p-0`}>
      <div className="container mx-auto">
        <div className="flex justify-between bg-white mb-6">
        {tabs.map((tab) => (
            <button
              key={tab.title}
              className={`p-4 w-1/4 text-[24px] font-[400] ${
                selectedTab === tab.title
                  ? `font-[500] ${tab.bgColor} ${tab.title === 'Employers' ? 'text-white' : 'text-black'}`
                  : " text-black"
              }`}
              onClick={() => setSelectedTab(tab.title)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-20 pl-10 gap-4">
        <div className="p-4">
            <h1 className={`text-[36px] font-[600] mb-4 ${selectedTab === 'Employers' ? 'text-white' : 'text-black'}`}>
              {currentTab.title}
            </h1>
            <div className="bg-[#FF8048] w-1/5 h-[4px] mt-[-15px] mb-8">

            </div>
            <p className={`text-[17px] font-[450] leading-[40px] mb-6 w-[80%] ${selectedTab === 'Employers' ? 'text-white' : 'text-black'}`}>
              {currentTab.description}
            </p>
          </div>
          <div className="p-4">
            <Image
              src={currentTab.image}
              alt={currentTab.title}
              className=" shadow-md"
              width={500}
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
