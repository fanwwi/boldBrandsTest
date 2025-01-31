import React from "react";
import AdIcons from "./AdIcons";

const MainBlockImage = ({ imageUrl }) => {
  return (
    <div className="relative">
      <img src={imageUrl} alt="Изображение" className="w-[535px] h-[400px]" />

      <div className="absolute top-0 left-0 p-4">
        <AdIcons />
      </div>
    </div>
  );
};

export default MainBlockImage;
