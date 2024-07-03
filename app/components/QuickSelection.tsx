import React from "react";
import Image from "next/image";

const quickSelection = [
  "Роллы с креветкой",
  "Роллы с лососем",
  "Роллы с копченным лососем",
  "Роллы с тунцом",
  "Роллы с крабовым замесом",
  "Ролл с угрем",
  "Роллы с авокадо",
  "Роллы с огурцом",
];

const QuickSelection = () => {
  return (
    <div className="w-[90%] m-auto bg-custom-gradient h-[265px] mt-[120px]">
      <div className="text-white flex w-full items-center justify-start pb-[48px]">
        <Image src="/images/icon.svg" alt="Лого Нори" width={46} height={47} />
        <h1 className="text-[30px] uppercase font-bold w-[400px] leading-[54px] font-aqum">
          Быстрый подбор
        </h1>
      </div>
      <div className="text-white grid grid-cols-4 gap-4 place-content-center">
        {quickSelection.map((item, index) => (
          <button
            key={index}
            className="border-2 border-yellow-500 pt-[6px] px-[30px] pb-[6px] rounded-[16px] flex items-center justify-center gap-1 text-center"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickSelection;
