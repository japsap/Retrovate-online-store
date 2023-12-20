"use client";

import React, { useContext, useState } from "react";
import { useParams } from "next/navigation";

import { LoggedNavbar } from "@components/NavbarComponents";
import ItemsCard from "@components/cards/ItemsCard";
import FooterComponent from "@components/FooterComponent";

import useFetch from "@hooks/useFetch";

import { CheckCircle, Heart, ShoppingBag, Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import SpinnerComponent from "@components/SpinnerComponent";

import CartContext from "@Context/CartContext";

const page = () => {

  const itemsPickedByUser = JSON.parse(sessionStorage.getItem("items")) || [];

  const { id } = useParams();
  const { addItemToCart } = useContext(CartContext)

  const [data, _, isLoading] = useFetch(`/api/catalog/${id}`, []);

  const { _id, name, image, desc, images, innerDescription, categorty, price } = data;

  const addToCartHandler = () => {
    addItemToCart({
      product: _id,
      name,
      price,
      image,
    });
  };
  return (
    <div>
      <LoggedNavbar bgColor={true} />
      <div className="max-w-[105rem] mx-auto px-5">
        <div className="relative flex items-start justify-between  flex-col lg:flex-row gap-20">
          {/* pc version */}
          <div className="hidden lg:grid grid-cols-1 gap-3 lg:grid-cols-2 w-full lg:w-[60%] ">
            {isLoading ? (
              <SpinnerComponent />
            ) : (
              images?.map((i, index) => (
                <img key={index} src={i} className="w-full h-auto" />
              ))
            )}
          </div>
          {/* pc version */}

          {/* mobile version */}
          <div className="flex lg:hidden w-full">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              breakpoints={{
                200: {
                  slidesPerView: 1,
                },
                400: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 3,
                },
              }}
              className="w-full"
            >
              {images?.map((image, index) => (
                <SwiperSlide>
                  <img key={index} src={image} className="w-full h-auto " />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* mobile version */}

          <div className="sticky top-20 flex flex-col gap-6 w-full lg:w-[40%]">
            <p>Category: {categorty}</p>
            <h1 className="text-4xl md:text-5xl font-bold">{name}</h1>
            <p className="text-stone-400">{desc}</p>
            <div className="flex items-center gap-3">
              <Star size={20} />
              <p className="text-[#121212] text-sm font-bold">
                (4,9) 9,2K Reviews
              </p>
            </div>
            <p className="leading-1">{innerDescription}</p>
            <h1 className="text-5xl font-bold">${Number(price).toFixed(2)}</h1>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-stone-400" />
                <p>Connect with Google Assistance & Siri</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-stone-400" />
                <p>Dolby Atmos Engine</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-stone-400" />
                <p>Aesthetics & Wood Design</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm">
                Free 2 days shipping and 90 days risk free trail
              </p>
              <div className="flex items-center gap-3 w-full">
                <button
                  className="w-full py-3 rounded-lg text-white bg-black border border-black dark:text-black dark:bg-white border-none dark:font-bold"
                  onClick={addToCartHandler}
                >
                  Add To Cart
                </button>
                <button className="border-2 py-3 w-max px-3 rounded-lg dark:border-white border-black">
                  <ShoppingBag />
                </button>
                <button className="border-2 py-3 w-max px-3 rounded-lg dark:border-white border-black">
                  <Heart />
                </button>
              </div>
            </div>
          </div>
        </div>
        {itemsPickedByUser.length === 0 ? '' :   <div className="flex flex-col gap-3 mt-20">
          <h1 className="text-2xl md:text-6xl font-bold underlineText">
            Your search history
          </h1>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            className="w-full basis-2/3 select-none"
            breakpoints={{
              200: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 3,
              },
            }}
          >
            {itemsPickedByUser?.map((swiperItem, i) => (
              <SwiperSlide>
                <ItemsCard swiperItem={swiperItem} id={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> }
      
      </div>
      <FooterComponent />
    </div>
  );
};

export default page;
