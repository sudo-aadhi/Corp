import React from "react";
import { brands } from "@/app/config/brands/config";

const Brands = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[995px] gap-4 relative top-7 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-evenly w-full min-h-[95px] bg-[#f7f7f7] rounded-[17px] py-4">
        {brands.map((brand) =>
          brand.primary.map((item) => (
            <div
              className="flex items-center justify-center p-2 m-2"
              key={item.key}
            >
              {item.svg()}
            </div>
          ))
        )}
      </div>
      <div className="flex flex-wrap items-center justify-evenly w-full max-w-[835px] min-h-[95px] bg-[#f7f7f7] rounded-[17px] py-4">
        {brands.map((brand) =>
          brand.secondary.map((item) => (
            <div
              className="flex items-center justify-center p-2 m-2"
              key={item.key}
            >
              {item.svg()}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Brands;
