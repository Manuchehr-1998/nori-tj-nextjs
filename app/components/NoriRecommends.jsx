import Image from "next/image";

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
const NoriRecommends = () => {
  return (
    <div className="w-full text-white m-auto mb-[116px]">
      <div>
        <div className="flex items-center justify-start w-[90%] m-auto gap-4 mb-2">
          <Image src="/images/Nori-icon.png" alt="" width={100} height={100} />
          <h1 className="text-[30px] text-center uppercase font-bold  leading-[54px] font-aqum">
            Нори рекомендует
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-4 w-[90%] m-auto ">
          {data.map((item) => (
            <div
              key={item.id}
              className=" bg-[#211723] text-white w-[250px] mb-8 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative"
            >
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoriRecommends;
