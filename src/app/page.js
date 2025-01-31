import AboutText from "@/components/AboutText";
import Header from "@/components/Header";
import Line from "@/components/Line";
import MainBlock from "@/components/MainBlock";
import Results from "@/components/Results";
import WeDidBlock from "@/components/WeDidBlock";
import React from "react";

const Home = () => {
  return (
    <div>
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

export default Home;
