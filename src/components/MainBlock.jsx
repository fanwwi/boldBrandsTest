import React from "react";
import MainBlockImage from "./MainBlockImage";
import MainTextBlock from "./MainTextBlock";

const MainBlock = () => {
  return (
    <div className="flex items-center space-x-8 justify-center my-[100px]">
      <MainTextBlock
        title={
          "Как мы помогли типографии увеличить выручку на 50% за месяц и выйти на новый уровень"
        }
      />
      <MainBlockImage imageUrl="img/letsgo.png" />
    </div>
  );
};

export default MainBlock;
