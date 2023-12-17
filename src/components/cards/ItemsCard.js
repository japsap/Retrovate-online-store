import React from "react";

import { BuyBtn } from "@components/fixedComponents";

const ItemsCard = (props) => {
  const { swiperItem, onClickFunction } = props;

  return (
    <a
      className=" animation column gap-2 border group dark:border-[#262626] border-stone-200  p-3 rounded-lg hover:border-stone-300/10 cursor-pointer"
      href={`/catalog/${swiperItem._id}`}
      onClick={() => onClickFunction(swiperItem)}
    >
      <img
        src={swiperItem.image}
        alt="product image"
        className="w-[300px] mx-auto h-auto mix-blend-color-burn"
      />
      <h1 className="text-xl font-bold text-black">{swiperItem.name}</h1>
      <p className="text-stone-400  text-sm uppercase">{swiperItem.desc}</p>
      <h1 className="w-max font-bold text-xl text-black underlineText">
        ${swiperItem.price}
      </h1>
      <div className="flex justify-end">
        <BuyBtn />
      </div>
    </a>
  );
};

export default ItemsCard;
