import React, { FC } from "react";
import "../../styles/globals.css";
import SliderWithTextComponent from "../components/SliderWithTextComponent";
import QuickSelection from "../components/QuickSelection";
import Bestseller from "../components/Bestseller";
import NoriRecommends from "../components/NoriRecommends";
import HotDeals from "../components/HotDeals";

const Home: FC = () => {
  const sliderImages = [
    "/images/Sushi-1.png",
    "/images/Sushi-2.png",
    "/images/Sushi-3.png",
    "/images/Sushi-4.png",
  ];

  interface HotDeal {
    id: string;
    imgURL: string;
  }

  const hotDealsData: HotDeal[] = [
    { id: "1", imgURL: "/images/HotDeals.png" },
    { id: "2", imgURL: "/images/HotDeals-1.png" },
    { id: "3", imgURL: "/images/HotDeals-2.png" },
  ];

  const title = "Горячие акции";

  return (
    <div className="w-full">
      <SliderWithTextComponent
        title="Свежие суши роллы на дом"
        description="Все наши блюда готовятся с любовью и тщательно упаковываются, чтобы сохранить свежесть и вкус до момента доставки"
        images={sliderImages}
      />

      <QuickSelection />
      <Bestseller />
      <NoriRecommends />
      <HotDeals title={title} hotDealsData={hotDealsData} showButton={true} />
    </div>
  );
};

export default Home;
