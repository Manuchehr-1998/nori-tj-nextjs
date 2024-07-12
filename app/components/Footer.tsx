// components/Footer.tsx

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className="bg-[#190421] text-white py-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center mb-5">
          <ul className="flex space-x-4 list-none m-0 p-0 gap-20">
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
        <div className="flex justify-center gap-10 mb-2 mt-2">
          <Image
            src="/images/faceboock.png"
            alt="Лого Нори"
            width={40}
            height={40}
          />
          <Image
            src="/images/instagram.png"
            alt="Лого Нори"
            width={40}
            height={40}
          />
        </div>
        <p>
          &copy; 2024 My Nori. All rights reserved. Created by Manuchekhr
          Saidov.
        </p>{" "}
      </div>
    </footer>
  );
};

export default Footer;
