// components/Card.tsx
import React, { FC } from "react";
import Image from "next/image";

interface CardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const Card: FC<CardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className="p-6  max-w-sm w-[270px] h-[260px] bg-[#1c1721]  rounded-xl shadow-md">
      <div className="w-full mb-4">
        <Image
          src={iconSrc}
          alt={title}
          width={48}
          height={48}
          className="rounded-full"
        />
      </div>
      <div className="w-full text-start">
        <h1 className="text-xl font-medium text-white">{title}</h1>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default Card;
