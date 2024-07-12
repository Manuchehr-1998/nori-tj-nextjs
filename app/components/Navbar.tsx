import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: FC = () => {
  return (
    <nav className="flex w-full justify-between items-center p-4  text-white">
      <div className="w-full">
        <div className="flex items-center justify-center">
          <ul className="flex space-x-4 list-none m-0 p-0">
            <li>
              <Link href="/menu">Меню</Link>
            </li>
            <li>
              <Link href="/delivery">Доставка</Link>
            </li>
            <li>
              <Link href="/promotion">Акции</Link>
            </li>
            <li>
              <Link href="/contacts">Контакты</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-evenly space-x-4">
          <Link href="/">
            <div className="font-bold text-xl">
              {" "}
              <Image
                src="/images/logo.png"
                alt="Лого Нори"
                width={142}
                height={60}
              />
            </div>
          </Link>
          <div className="w-[25%] flex rounded-lg justify-between items-center text-white bg-[#29142c]">
            <input
              type="text"
              className="w-full h-10 p-3 rounded-lg bg-transparent text-white focus:outline-none"
              placeholder="Например: Суши с копченным лососем"
            />
            <Image
              src="/svg/search.svg"
              alt="Ваша иконка"
              width={40}
              height={40}
            />
          </div>
          <div className="text-[30px]">+992507877676</div>
          <div className="flex text-sm gap-1">
            <div>
              <Image
                src="/svg/stopwatch.svg" // Укажите путь к вашему SVG
                alt="Ваша иконка"
                width={40}
                height={40}
              />
            </div>
            Прием заказов:
            <br /> с 10:00 до 22:00
          </div>
          <div className="cursor-pointer flex gap-1 text-[30px]">
            <Image
              src="/svg/basket.svg"
              alt="Ваша иконка"
              width={40}
              height={36}
            />
            220
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
