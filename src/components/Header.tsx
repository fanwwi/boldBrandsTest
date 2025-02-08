import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between w-full py-[56px] px-[24px] bg-white h-[97px]">
      <img src="img/logo.png" alt="Логотип" className="h-[31px] w-[231px]" />

      <div className="flex justify-evenly text-gray-700 w-[538px]">
        <span className="cursor-pointer hover:text-gray-900">Главная</span>
        <span className="cursor-pointer hover:text-gray-900">О нас</span>
        <span className="cursor-pointer hover:text-gray-900">Кейсы</span>
        <span className="cursor-pointer hover:text-gray-900">Услуги</span>
        <span className="cursor-pointer hover:text-gray-900">Контакты</span>
      </div>

      <div className="flex items-center space-x-4 w-[278px] h-[49px] justify-evenly">
        <div className="flex items-center space-x-2">
          <img src="img/network.png" alt="Сеть" className="h-5" />
          <span className="text-gray-700">РУ</span>
        </div>
        <button className="h-[49px] w-[159px] text-center rounded-lg border-[2px] border-black">
          Связаться
        </button>
      </div>
    </header>
  );
};

export default Header;
