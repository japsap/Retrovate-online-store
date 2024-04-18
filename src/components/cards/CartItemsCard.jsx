import CartContext from "@Context/CartContext";
import { Trash } from "lucide-react";
import React, { useContext } from "react";

const CartItemsCard = ({ product, name, image, categorty, price  }) => {

  const { deleteItemFromCart } = useContext(CartContext)

  return (
    <div className="relative w-full flex justify-between flex-col lg:flex-row xl:h-[170px] border border-[#E5E7EB] dark:border-[#262626] p-3 rounded-md shadow-sm">
      <div className="flex flex-col xl:flex-row gap-5 w-full">
        <img className="mx-auto w-[250px] h-auto object-contain hide-bg" src={image} /> 
        <div className="grid flex-col content-between gap-1 w-full">
          <h1 className="font-bold text-2xl">{name}</h1>
          <div>
            <p className="text-lg">Catogory: {categorty}</p>
            <p className="text-lg">Product: 1 item</p>
          </div>
        </div>
      </div>
      <div className="grid gap-3 flex-col content-between lg:justify-items-end lg:items-end">
        <div onClick={() => deleteItemFromCart(product)} className="absolute lg:static top-3 right-3 w-max bg-red-600/30 p-2 rounded-full cursor-pointer">
            <Trash className="text-red-600"/>
        </div>
        <span className="text-xl font-bold mt-5 underlineText">${Number(price).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartItemsCard;