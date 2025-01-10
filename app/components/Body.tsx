"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Moon } from "lucide-react";
import landingScreenshot from "@/public/hero/landing-page.svg";
import Image from "next/image";
import Brands from "@/app/components/Brands";

const Body = () => {
  return (
    <div className="relative top-12 mx-auto flex w-full max-w-screen-xl flex-col items-center pb-20">
      <div className="flex flex-col items-center justify-center px-4 text-center text-6xl font-semibold text-[#0A0808]">
        <h1 className="leading-tight">Write better code</h1>
        <h1 className="leading-tight">collaboratively.</h1>
      </div>
      <div className="mt-3 flex flex-col items-center justify-center px-4 text-center font-inter text-[17px] text-[#828282]">
        <p>Collaborate seamlessly to write efficient and error-free code</p>
        <p>Build smarter solutions through teamwork</p>
      </div>
      <div className="mt-4 flex items-center justify-center gap-4 px-4 font-inter text-[17px] text-[#828282]">
        <Button className="rounded-[7px] bg-[#EBEBEB] font-inter font-medium text-black transition-all duration-500 ease-in-out hover:bg-[#d8d8d8]">
          Learn More
        </Button>
        <Button className="rounded-[7px] bg-black font-inter font-medium text-white transition-all duration-500 ease-in-out hover:bg-[#1f1f1f]">
          Try It Free
          <ArrowRight className="ml-2" />
        </Button>
      </div>
      <div className="mt-16 flex h-auto w-full max-w-[845px] items-center justify-center overflow-hidden rounded-[15px] px-4 shadow-md">
        <Image
          src={landingScreenshot}
          alt="landing hero"
          width={845}
          height={460}
          layout="responsive"
          draggable="false"
        />
      </div>
      <div className="mt-16 flex h-[2px] w-full max-w-[600px] items-center justify-center overflow-hidden bg-[#ECECEC] opacity-50"></div>
      <div className="mt-16 flex flex-wrap items-center justify-center gap-4 overflow-hidden px-4 text-center">
        <Moon size={17} color="#CCCCCC" fill="#CCCCCC" />
        <p className="text-[#CCCCCC]">•</p>
        <p className="text-sm text-[#CCCCCC] sm:text-base">
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
