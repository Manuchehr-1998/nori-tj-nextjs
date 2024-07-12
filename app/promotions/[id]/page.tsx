// app/promotions/[id]/page.tsx
"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import Button from "../../ui/Button";

interface HotDeal {
  id: string;
  imgURL: string;
}

const hotDealsData: HotDeal[] = [
  { id: "1", imgURL: "/images/HotDeal.png" },
  { id: "2", imgURL: "/images/HotDeal.png" },
  { id: "3", imgURL: "/images/HotDeal.png" },
  { id: "4", imgURL: "/images/HotDeal.png" },
  { id: "5", imgURL: "/images/HotDeal.png" },
  { id: "6", imgURL: "/images/HotDeal.png" },
];

const PromotionDetail = () => {
  const { id } = useParams();
  const deal = hotDealsData.find((deal) => deal.id === id);

  if (!deal) {
    return <div>Акция не найдена</div>;
  }

  return (
    <div className="w-[90%] m-auto relative">
      <div className="w-[90%] m-auto">
        <h1 className="text-[30px] px-[50px] uppercase font-bold leading-[54px] font-aqum text-white ">
          Акция
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <Image
          src={deal.imgURL}
          alt={`Hot Deal ${deal.id}`}
          width={1200}
          height={500}
          className="rounded-lg w-[1200px] h-[500px]"
        />
        <p className="text-white w-[1137px] text-center font-jura font-bold text-[30px] leading-[35.49px] mb-[120px]">
          Делайте заказ на самовывоз или доставку с максимальной выгодой. Скидка
          15% на все суши и роллы. С понедельника по четверг, с 15:00 по 17:00.
          Акция действует до 31 июня 2023 года.
        </p>
      </div>
      <div className="absolute top-[430px] left-[150px]">
        <Button>Оформить заказ</Button>
      </div>
    </div>
  );
};

export default PromotionDetail;
