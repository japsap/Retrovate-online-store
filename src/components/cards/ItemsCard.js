import React from "react";

import { BuyBtn } from "@components/fixedComponents";

const ItemsCard = ({ image, name, desc, price, _id }) => {
  return (
    <a
      className="animation column gap-2 border group dark:border-[#262626] border-stone-200 darkL:b p-3 rounded-lg hover:border-stone-300/10 cursor-pointer"
      href={`/catalog/${_id}`}
    >
      <img
        src={image}
        alt="product image "
        className="w-full h-auto mix-blend-color-burn"
      />
      <h1 className="text-xl font-bold text-black">{name}</h1>
      <p className="text-stone-400  text-sm uppercase">{desc}</p>
      <h1 className="w-max font-bold text-xl text-black underlineText">
        ${price}
      </h1>
      <div className="flex justify-end">
        <BuyBtn />
      </div>
    </a>
  );
};

export default ItemsCard;
