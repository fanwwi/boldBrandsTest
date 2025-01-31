import React from "react";

const WeDidImageBlock = ({ imageUrl, title, listItems }) => {
  return (
    <div className="flex flex-col items-start gap-[24px]">
      <img src={imageUrl} alt={title} className="w-[482px] h-[400px]" />
      <span className="font-bold text-[28px]">{title}</span>
      <ul className="text-[#838895] text-[18px] list-disc pl-5">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WeDidImageBlock;
