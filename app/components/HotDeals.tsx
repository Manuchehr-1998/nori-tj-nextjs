// components/HotDeals.tsx
"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

interface HotDeal {
  id: string;
  imgURL: string;
}

interface HotDealsProps {
  title: string;
  hotDealsData: HotDeal[];
  showButton?: boolean; // Add showButton prop
}

const HotDeals: FC<HotDealsProps> = ({
  title,
  hotDealsData = [],
  showButton = false,
}) => {
  return (
    <div className="w-[90%] m-auto">
      <h1 className="text-[30px] px-[50px] uppercase font-bold leading-[54px] font-aqum text-white">
        {title}
      </h1>
      <div className="flex flex-wrap justify-between">
        {hotDealsData.map((deal) => (
          <Link href={`/promotions/${deal.id}`} key={deal.id}>
            <div className="m-4 w-[373px] cursor-pointer">
              <Image
                src={deal.imgURL}
                alt={`Hot Deal ${deal.id}`}
                width={373}
                height={373}
                className="rounded-lg"
              />
            </div>
          </Link>
        ))}
      </div>
      {showButton && (
        <div className="flex justify-center">
          <Button>Показать больше</Button>
        </div>
      )}
    </div>
  );
};

export default HotDeals;
