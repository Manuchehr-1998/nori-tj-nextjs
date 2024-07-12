// app/promotion/page.tsx
"use client";
import React from "react";
import HotDeals from "../components/HotDeals";

interface HotDeal {
  id: string;
  imgURL: string;
}

const hotDealsData: HotDeal[] = [
  { id: "1", imgURL: "/images/HotDeals-1.png" },
  { id: "2", imgURL: "/images/HotDeals.png" },
  { id: "3", imgURL: "/images/HotDeals-2.png" },
  { id: "4", imgURL: "/images/HotDeals-4.png" },
  { id: "5", imgURL: "/images/HotDeals-3.png" },
  { id: "6", imgURL: "/images/HotDeals-5.png" },
];

const title = "Новости и акции";

const PromotionPage: React.FC = () => {
  return (
    <div>
      <HotDeals title={title} hotDealsData={hotDealsData} />
    </div>
  );
};

export default PromotionPage;
