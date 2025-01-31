import React from "react";
import ResultBlock from "./ResultBlock";

const Results = () => {
  return (
    <div className="flex flex-col gap-[30px] my-[100px] mx-[80px]">
      {/* Заголовок */}
      <span className="uppercase text-[24px] font-bold text-[#838895]">
        Измеримые результаты
      </span>

      {/* Контейнер для ResultBlock */}
      <div className="flex flex-wrap gap-[30px]">
        <ResultBlock
          additionalText={"Рост выручки:"}
          value={"$0,51"}
          description={
            "Цена за клик. Низкие расходы при высоком охвате целевой аудитории."
          }
        />
        <ResultBlock
          additionalText={"Новые клиенты:"}
          value={"в 2 раза"}
          description={
            "Рост выручки  за последний месяц благодаря притоку новых клиентов и повышению лояльности постоянных."
          }
        />
        <ResultBlock
          additionalText={"Долгосрочный партнерства:"}
          value={"+1 500"}
          description={
            "подписчиков — только реальные пользователи из целевой аудитории, повысившие активность на странице."
          }
        />
      </div>
    </div>
  );
};

export default Results;
