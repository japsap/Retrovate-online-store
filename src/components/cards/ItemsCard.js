import React from "react";

import { BuyBtn } from "@components/fixedComponents";

const ItemsCard = ({image, name, desc, price, id }) => {
  return (
    <a className="animation column gap-2 border group border-stone-200 p-3 rounded-lg hover:border-stone-300 cursor-pointer" href={`/catalog/${id}`}>
      <img src={image} alt="product image" className="w-full h-auto" />
      <h1 className="text-xl font-bold text-black">{name}</h1>
      <p className="text-stone-400  text-sm uppercase">{desc}</p>
      <h1 className="font-bold text-xl text-black">${price}</h1>
      <div className="flex justify-end">
        <BuyBtn />
      </div>
    </a>
  );
};

export default ItemsCard;
