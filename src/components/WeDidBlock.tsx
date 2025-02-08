import React from "react";
import AboutText from "./AboutText";
import WeDidImageBlock from "./WeDidImageBlock";

const WeDidBlock: React.FC = () => {
  return (
    <div className="flex gap-[24px] items-start">
      <AboutText title={"Что мы сделали?"} />

      <div className="grid grid-cols-2 gap-[32px] my-[100px] ml-[-260px]">
        <WeDidImageBlock
          imageUrl={"img/image.png"}
          title={"Привлекли новых клиентов"}
          listItems={[
            "Разработали стратегию лидогенерации через онлайн каналы.",
            "Настроили таргетированную рекламу, которая сразу начала приносить качественные заявки.",
          ]}
        />
        <WeDidImageBlock
          imageUrl={"img/image.png"}
          title={"Привлекли новых клиентов"}
          listItems={[
            "Разработали стратегию лидогенерации через онлайн каналы.",
            "Настроили таргетированную рекламу, которая сразу начала приносить качественные заявки.",
          ]}
        />
        <WeDidImageBlock
          imageUrl={"img/image.png"}
          title={"Привлекли новых клиентов"}
          listItems={[
            "Разработали стратегию лидогенерации через онлайн каналы.",
            "Настроили таргетированную рекламу, которая сразу начала приносить качественные заявки.",
          ]}
        />
        <WeDidImageBlock
          imageUrl={"img/image.png"}
          title={"Привлекли новых клиентов"}
          listItems={[
            "Разработали стратегию лидогенерации через онлайн каналы.",
            "Настроили таргетированную рекламу, которая сразу начала приносить качественные заявки.",
          ]}
        />
      </div>
    </div>
  );
};

export default WeDidBlock;
