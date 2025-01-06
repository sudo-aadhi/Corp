import React from "react";

const Body = () => {
  return (
    <div className="flex flex-col items-center w-[1000px] h-[1000px]">
      <div className="relative top-16 flex flex-col items-center justify-center text-6xl text-[#0A0808] font-inter font-black">
        <h1>Write better code</h1>
        <h1>collaboratively.</h1>
      </div>
      <div className="relative top-20 flex flex-col items-center justify-center text-[17px] text-[#828282] font-inter">
        <p>Collaborate seamlessly to write efficient and error free code</p>
        <p>Build smarter solution through teamwork</p>
      </div>
      <div className="relative top-20 flex items-center justify-center text-[17px] text-[#828282] font-inter"></div>
    </div>
  );
};

export default Body;
