import React from "react";
import Header from "./Header";
import MainBlock from "./MainBlock";
import Line from "./Line";
import AboutText from "./AboutText";
import WeDidBlock from "./WeDidBlock";
import Results from "./Results";

const Container: React.FC = () => {
  return (
    <div className="flex flex-col gap-[80px]">
      <Header />
      <MainBlock />
      <Line />
      <AboutText
        title={"О проекте"}
        content={
          "Dental Korzina — один из наших первых партнеров, с которым мы начали продвижение «с нуля» и расширили охват на несколько локаций. <br /> <br />Мы комплексно подошли к подготовке обучающих мероприятий, включая разработку сценариев и визуального стиля для видеокурсов, полный процесс съемки и упаковки уроков, а также создание дизайна сертификатов, блокнотов и приглашений."
        }
      />
      <Line />
      <AboutText
        title={"задача клиента"}
        content={
          "Создать систему, которая позволит увеличить поток заказов, автоматизировать ключевые процессы, сформировать сильную команду специалистов и выстроить устойчивый рост."
        }
      />
      <Line />
      <WeDidBlock />
      <Line />
      <Results />
    </div>
  );
};

export default Container;
