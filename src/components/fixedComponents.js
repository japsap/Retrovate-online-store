"use client";

import Image from "next/image";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { sofaSwiper } from "@constants/Data";

import "swiper/css";

import { Plus } from "lucide-react";
import ItemsCard from "./cards/ItemsCard";

export const Logo = ({ logoTextRef }) => {
  return (
    <div
      className="flex-start gap-3 cursor-pointer"
      onClick={() => (window.location.href = "/")}
    >
      <Image width={50} height={50} src={"/images/logo.png"} alt="Logo Image" />
      <h3 className="navbar-logo hidden md:flex text-xl" ref={logoTextRef}>Retrovate</h3>
    </div>
  );
};

export const ProductsSwiper = ({ setSwiperRef }) => {
  return (
    <div className="w-full 2xl:w-[1000px]">
      <Swiper
        onSwiper={setSwiperRef}
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
            <ItemsCard {...s} id={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const BuyBtn = () => {
  return (
    <div className="animation flex items-center group-hover:bg-primaryColor justify-between gap-5 group  w-max rounded-full cursor-pointer mt-2" onClick={() => {}}>
      <span className="animation opacity-0 group-hover:opacity-100 ml-5 texts-sm font-bold">Add to Cart</span>
      <button className="animation bg-white border-4 border-primaryColor rounded-full p-2 group-hover:rotate-[360deg]">
        <Plus />
      </button>
    </div>
  );
};
