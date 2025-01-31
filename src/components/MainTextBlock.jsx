import React from "react";

const MainTextBlock = ({ title }) => {
  return (
    <div className="flex flex-col space-y-4 w-[700px]">
      <h1 className="text-[64px] font-bold text-gray-800">{title}</h1>
    </div>
  );
};

export default MainTextBlock;
