"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Moon } from "lucide-react";
import landingScreenshot from "@/public/hero/landing-page.svg";
import Image from "next/image";
import Brands from "@/app/components/Brands";

const Body = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-xl mx-auto pb-20 relative top-12">
      <div className="flex flex-col items-center justify-center text-6xl text-[#0A0808] font-semibold px-4 text-center">
        <h1 className="leading-tight">Write better code</h1>
        <h1 className="leading-tight">collaboratively.</h1>
      </div>
      <div className="flex flex-col items-center justify-center text-[17px] text-[#828282] font-inter mt-3 px-4 text-center">
        <p>Collaborate seamlessly to write efficient and error-free code</p>
        <p>Build smarter solutions through teamwork</p>
      </div>
      <div className="flex items-center justify-center text-[17px] text-[#828282] gap-4 font-inter mt-4 px-4">
        <Button className="bg-[#EBEBEB] text-black rounded-[7px] font-inter font-medium hover:bg-[#d8d8d8] transition-all duration-500 ease-in-out">
          Learn More
        </Button>
        <Button className="bg-black text-white rounded-[7px] font-inter font-medium hover:bg-[#1f1f1f] transition-all duration-500 ease-in-out">
          Try It Free
          <ArrowRight className="ml-2" />
        </Button>
      </div>
      <div className="flex items-center justify-center overflow-hidden w-full max-w-[845px] h-auto mt-16 shadow-md rounded-[15px] px-4">
        <Image
          src={landingScreenshot}
          alt="landing hero"
          width={845}
          height={460}
          layout="responsive"
          draggable="false"
        />
      </div>
      <div className="flex items-center justify-center overflow-hidden w-full max-w-[600px] h-[2px] mt-16 bg-[#ECECEC] opacity-50"></div>
      <div className="flex items-center justify-center overflow-hidden gap-4 mt-16 px-4 text-center flex-wrap">
        <Moon size={17} color="#CCCCCC" fill="#CCCCCC" />
        <p className="text-[#CCCCCC]">•</p>
        <p className="text-[#CCCCCC] text-sm sm:text-base">
          Powering Collaboration for 1500+ Businesses
        </p>
        <p className="text-[#CCCCCC]">•</p>
        <Moon size={17} color="#CCCCCC" fill="#CCCCCC" />
      </div>
      <Brands />
    </div>
  );
};

export default Body;
