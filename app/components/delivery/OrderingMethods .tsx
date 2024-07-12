import Button from "@/app/ui/Button";
import Image from "next/image";

// components/OrderingMethods.tsx
const OrderingMethods = () => {
  return (
    <div className="mb-6 w-[90%] m-auto">
      <h1 className="text-[30px] text-center uppercase font-bold w-[400px] leading-[54px] font-aqum text-white">
        Доставка и оплата
      </h1>
      <div className="flex bg-[#1d1627] rounded-xl ">
        <div className="w-[1200px] h-[484px] text-[30px] flex">
          <div className="w-[65%] m-auto items-center leading-10">
            <p className="mb-2  leading-10 text-center">
              Оформить заказ можно двумя способами:
            </p>

            <p className="mb-2 text-center leading-10">
              - В режиме онлайн на сайте
            </p>
            <p className="text-center leading-10 mb-[50px]">
              - Позвонив по телефону +9928824848884
            </p>
            <div>
              <Button>Оформить заказ</Button>
            </div>
          </div>
          <div className="relative w-[50%]">
            <div className="absolute top-[30px] left-[220px] w-[350px] h-[410px]  rounded-tl-xl z-50">
              <Image
                src="/images/delivery-logo.png"
                alt="Delivery Logo"
                width={350}
                height={410}
                className="rounded-tl-xl "
              />
            </div>
            <div className="absolute z-30 top-[255.18px] left-[340.32px] w-[334.29px] h-[175.13px]  rotate-[365.31deg]">
              <Image
                src="/images/delivery-1.png"
                alt="Delivery 1"
                width={334.29}
                height={175.13}
              />
            </div>
            <div className="absolute top-[285.5px] left-[210px] w-[312.92px] h-[193.45px]  rotate-[-1.73deg]">
              <Image
                src="/images/delivery-2.png"
                alt="Delivery 2"
                width={312.92}
                height={193.45}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderingMethods;
