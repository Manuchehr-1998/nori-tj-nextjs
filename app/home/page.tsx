import { FC } from "react";
import "../../styles/globals.css";
import SliderWithTextComponent from "../components/SliderWithTextComponent";
import QuickSelection from "../components/QuickSelection";
import Bestseller from "../components/Bestseller";
import NoriRecommends from "../components/NoriRecommends";

const Home: FC = () => {
  const sliderImages = [
    "/images/Sushi-1.png",
    "/images/Sushi-2.png",
    "/images/Sushi-3.png",
    "/images/Sushi-4.png",
  ];

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
    </div>
  );
};

export default Home;
