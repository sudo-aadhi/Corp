import React from "react";
import { brands } from "@/app/config/brands/config";

const Brands = () => {
  return (
    <div className="relative top-7 flex w-full max-w-[995px] flex-col items-center justify-center gap-4 px-4 sm:px-6 lg:px-8">
      <div className="flex min-h-[95px] w-full flex-wrap items-center justify-evenly rounded-[17px] bg-[#f7f7f7] py-4">
        {brands.map((brand) =>
          brand.primary.map((item) => (
            <div
              className="m-2 flex items-center justify-center p-2"
              key={item.key}
            >
              {item.svg()}
            </div>
          )),
        )}
      </div>
      <div className="flex min-h-[95px] w-full max-w-[835px] flex-wrap items-center justify-evenly rounded-[17px] bg-[#f7f7f7] py-4">
        {brands.map((brand) =>
          brand.secondary.map((item) => (
            <div
              className="m-2 flex items-center justify-center p-2"
              key={item.key}
            >
              {item.svg()}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Brands;
