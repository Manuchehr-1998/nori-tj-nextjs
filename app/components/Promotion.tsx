// components/Promotion.tsx

import { FC } from "react";
import Image from "next/image";

interface PromotionProps {
  imageUrl: string;
}

const Promotion: FC<PromotionProps> = ({ imageUrl }) => {
  return (
    <div className="max-w-sm bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-96">
        <Image
          src={imageUrl}
          alt="Promotion Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">Hot Deal</h3>
        <p className="text-sm mb-4">
          Description of the promotion. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
        <p className="text-xs text-gray-400">Click to see full details</p>
      </div>
    </div>
  );
};

export default Promotion;
