"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

interface SliderWithTextProps {
  title: string;
  description: string;
  images: string[];
}

const splitTitle = (title: string) => {
  return title.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
};

const SliderWithTextComponent: React.FC<SliderWithTextProps> = ({
  title,
  description,
  images,
}) => {
  return (
    <div className="flex my-slider-with-text text-white pt-12 pb-12 justify-evenly items-center">
      <div className="p-10 w-[45%]">
        <h1 className="text-[40px] uppercase font-bold w-[400px] leading-[54px] font-aqum">
          {splitTitle(title)}
        </h1>
        <p className="text-lg">{description}</p>
        <button className="p-2 m-2 bg-yellow-500 rounded-2xl">
          Оформить заказ
        </button>
      </div>

      <div className="w-[45%]">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {images.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[400px]">
                <Image
                  src={imageUrl}
                  alt={`Slide ${index + 1}`}
                  layout="responsive"
                  width={316}
                  height={422}
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderWithTextComponent;
