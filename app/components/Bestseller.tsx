"use client";
import { FC } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles1.css";

const data = [
  {
    id: "1",
    name: "Майами",
    title: "Рис, нори, творожный сыр Креметте, тунец, огурец, соус тобико",
    price: "45c",
    imgURL: "/images/Hit-1.png",
  },
  {
    id: "2",
    name: "Жареный Банито",
    title:
      "Рис, нори, творожный сыр Креметте, тунец, кляр темпура, лосось, авокадо, сухари панко, соус унаги    ",
    price: "70c",
    imgURL: "/images/Hit-2.png",
  },
  {
    id: "3",
    name: "Запеченный ролл с угрем",
    title:
      "Рис, Нори, Творожный сыр Креметте, Угорь, Огурец, Унаги соус, Кунжут белый, кунжут черный    ",
    price: "55c",
    imgURL: "/images/Hit-3.png",
  },
  {
    id: "4",
    name: "Чиз ролл",
    title:
      "Рис, нори, творожный сыр Креметте,      отварная креветка, твердый сыр, огурец, соус спайс          ",
    price: "60c",
    imgURL: "/images/Hit-4.png",
  },
  {
    id: "5",
    name: "Калифорния классическая",
    title:
      "Рис, нори, творожный сыр, креметте,      крабовый замес, огурец, авокадо, тобико",
    price: "55c",
    imgURL: "/images/Hit-5.png",
  },
  {
    id: "1",
    name: "Майами",
    title: "Рис, нори, творожный сыр Креметте, тунец, огурец, соус тобико",
    price: "45c",
    imgURL: "/images/Hit-1.png",
  },
  {
    id: "2",
    name: "Жареный Банито",
    title:
      "Рис, нори, творожный сыр Креметте, тунец, кляр темпура, лосось, авокадо, сухари панко, соус унаги    ",
    price: "70c",
    imgURL: "/images/Hit-2.png",
  },
  {
    id: "3",
    name: "Запеченный ролл с угрем",
    title:
      "Рис, Нори, Творожный сыр Креметте, Угорь, Огурец, Унаги соус, Кунжут белый, кунжут черный    ",
    price: "55c",
    imgURL: "/images/Hit-3.png",
  },
  {
    id: "4",
    name: "Чиз ролл",
    title:
      "Рис, нори, творожный сыр Креметте,      отварная креветка, твердый сыр, огурец, соус спайс          ",
    price: "60c",
    imgURL: "/images/Hit-4.png",
  },
  {
    id: "5",
    name: "Калифорния классическая",
    title:
      "Рис, нори, творожный сыр, креметте,      крабовый замес, огурец, авокадо, тобико",
    price: "55c",
    imgURL: "/images/Hit-5.png",
  },
];

const Bestseller: FC = () => {
  return (
    <div className=" m-auto bg-custom-gradient mt-[120px] mb-[50px]">
      <div className="text-white flex w-full items-center justify-start pb-[48px]">
        <h1 className="text-[30px] text-center uppercase font-bold w-[400px] leading-[54px] font-aqum">
          Хит продаж
        </h1>
      </div>
      <div className="flex w-full gap-10 h-[80vh] text-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className=" bg-[#211723] text-white w-[250px] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
                <div className="absolute flex items-start px-2 pt-2">
                  <Image
                    src="/images/hit-logo.png"
                    alt=""
                    width={49}
                    height={49}
                  />
                </div>
                <Image src={item.imgURL} alt="" width={250} height={198} />
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-[15px] font-bold tracking-tight">
                      {item.name}
                    </h5>
                  </a>
                  <div className="h-[100px]">
                    <p className="mb-3 font-normal text-[13px]">{item.title}</p>
                  </div>
                  <div className="mt-[20px] flex justify-center items-center gap-4">
                    <p className="text-[22px]">{item.price}</p>
                    <button className="px-3 pb-2 pt-2 m-2 bg-yellow-500 rounded-2xl flex gap-2 text-black items-center text-[12px]">
                      в корзину
                      <Image
                        src="/svg/basket-black.svg"
                        alt="Ваша иконка"
                        width={18}
                        height={17}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Bestseller;
