import React from "react";

interface MainTextBlockProps {
  title: string;
}

const MainTextBlock: React.FC<MainTextBlockProps> = ({ title }) => {
  return (
    <div className="flex flex-col space-y-4 w-[700px]">
      <h1 className="text-[64px] font-bold text-gray-800">{title}</h1>
    </div>
  );
};

export default MainTextBlock;
