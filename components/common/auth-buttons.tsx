import Link from "next/link";
import React from "react";

const AuthButtons = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Link
          href={"/sign-in"}
          className="flex items-center justify-center text-center bg-[#EBEBEB] w-[75px] px-2 h-[32px] rounded-md text-black shadow-sm"
        >
          Sign in
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Link
          href={"/sign-up"}
          className="flex items-center justify-center text-center bg-[#EBEBEB] w-[75px] px-2 h-[32px] rounded-md text-black shadow-sm"
        >
          Sign up
        </Link>
      </div>
    </>
  );
};

export default AuthButtons;
