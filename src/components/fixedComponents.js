"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { sofaSwiper } from "@constants/Data";

import "swiper/css";

import { Plus } from "lucide-react";

export const Logo = () => {
  return (
    <div
      className="flex-start gap-3 cursor-pointer"
      onClick={() => (window.location.href = "/")}
    >
      <Image width={50} height={50} src={"/images/logo.png"} alt="Logo Image" />
      <h3 className="hidden md:flex font-bold text-xl">Retrovate</h3>
    </div>
  );
};

export const ProductsSwiper = () => {
  return (
    <div className="w-full 2xl:w-[1000px]">
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
        {sofaSwiper.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="column gap-2">
              <img src={s.image} classNamem="w-10 h-10" />
              <h1 className="text-xl font-bold text-black">{s.name}</h1>
              <p className="text-stone-400  text-sm uppercase">{s.desc}</p>
              <h1 className="font-bold text-xl text-black">${s.price}</h1>
              <BuyBtn/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const BuyBtn = () => {
  return (
    <button className="flex items-center text-sm font-bold bg-primaryColor mt-5 gap-3 w-max  pl-5 h-12 p-2 rounded-full border-primaryColor">
      Add to Cart
      <Plus
        className=" cursor-pointer border-[4px] border-primaryColor bg-white rounded-full p-3"
        size={45}
      />
    </button>
  );
};
