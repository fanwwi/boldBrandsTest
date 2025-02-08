import React from "react";

const AdIcons: React.FC = () => {
  return (
    <div className="flex space-x-3">
      <div className="flex items-center space-x-2 p-3 bg-gray-400 bg-opacity-50 backdrop-blur-md rounded-lg cursor-pointer">
        <img src="img/smm.png" alt="smm" className="h-[24px] w-[24px]" />
        <span className="text-[18px] text-gray-700">SMM</span>
      </div>

      <div className="flex items-center space-x-2 p-3 bg-gray-100 bg-opacity-50 backdrop-blur-md rounded-lg cursor-pointer">
        <img src="img/target.png" alt="target" className="h-[24px] w-[24px]" />
        <span className="text-[18px] text-gray-700">Таргет</span>
      </div>

      <div className="flex items-center space-x-2 p-3 bg-gray-100 bg-opacity-50 backdrop-blur-md rounded-lg cursor-pointer">
        <img
          src="img/marketing.png"
          alt="marketing"
          className="h-[24px] w-[24px]"
        />
        <span className="text-[18px] text-gray-700">Маркетинг</span>
      </div>
    </div>
  );
};

export default AdIcons;
