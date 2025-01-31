import React from "react";

const ResultBlock = ({ value, description, additionalText }) => {
  return (
    <div className="flex flex-col gap-[8px] w-[420px]">
      {additionalText && (
        <span className="text-[#000000] text-[18px]">{additionalText}</span>
      )}
      
      <span className="text-[#FF2B44] font-bold text-[40px]">{value}</span>

      <p className="text-[#838895] text-[18px]">{description}</p>
    </div>
  );
};

export default ResultBlock;
