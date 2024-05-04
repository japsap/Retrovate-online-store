import React, { useContext } from "react";

import Link from "next/link";

import AddToCarTButton from "@components/ui/add-to-card-btn";
import CartContext from "@Context/CartContext";

const ProductCard = ({ name, price, image, _id, images }) => {

    const { addItemToCart } = useContext(CartContext)

    const addToCartHandler = () => {
        addItemToCart({
          product: _id,
          name,
          price,
          image,
        });
      };

  return (
    <div className="product-card">
      <Link href={`/catalog/${_id}`}>
        <div className="hover-img-effect dark:mt-10">
          <img alt={name} src={image} className="w-2/3 mx-auto rounded-t-sm" />
          <img alt={name} src={images[1]} className="hidden lg:flex w-2/3 mx-auto" />
        </div>
      </Link>

      <div className="px-[82.2px]" style={{ marginTop: "-18px" }}>
        <div className="bg-white rounded-b-sm flex flex-col gap-3 py-5">
          <h1 className="font-bold text-xl text-black">{name}</h1>
          <p className="text-lg">{price.toFixed(2)}$</p>
        </div>
        <AddToCarTButton onClick={addToCartHandler}/>
      </div>
    </div>
  );
};

export default ProductCard;
