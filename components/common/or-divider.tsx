import React from "react";

const OrDivider = () => {
  return (
    <div className="my-4 flex items-center">
      <div className="h-px flex-grow bg-gray-300"></div>
      <span className="px-4 text-sm text-gray-500">or</span>
      <div className="h-px flex-grow bg-gray-300"></div>
    </div>
  );
};

export default OrDivider;
