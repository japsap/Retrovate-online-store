import React from "react";

import { BuyBtn } from "@components/fixedComponents";
import { getItemsSearchedByUser } from "@lib/utils";

const ItemsCard = (props) => {
  const { swiperItem, isLoading } = props;

  const { getItemsPickedByUser } = getItemsSearchedByUser();


  return (
    <>
        <a
          className=" animation column gap-2 border group dark:border-[#262626] border-stone-200  p-3 rounded-lg hover:border-stone-300/10 cursor-pointer"
          href={`/catalog/${swiperItem._id}`}
          onClick={() => getItemsPickedByUser(swiperItem)}
        >
          <img
            src={swiperItem.image}
            alt="product image"
            className="w-[300px] mx-auto h-auto hide-bg"
          />
          <h1 className="text-xl font-bold text-black">{swiperItem.name}</h1>
          <p className="text-stone-400  text-sm">{swiperItem.desc}</p>
          <h1 className="w-max font-bold text-xl text-black underlineText">
            ${swiperItem.price}
          </h1>
          <div className="flex justify-end">
            <BuyBtn />
          </div>
        </a>
    </>
  );
};

export default ItemsCard;
