"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "@hooks/useFetch";

import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

import { Skeleton } from "./ui/skeleton";

export const SwiperCard = (swiper) => {
  const { name, price, image, _id, images } = swiper;

  return (
    <SwiperSlide
      key={_id}
      className="flex flex-col justify-center items-center text-center cursor-pointer select-none relative"
    >
      <Link href={`/catalog/${_id}`}>
        <div className="hover-img-effect dark:mt-10">
          <img alt={name} src={image} className="w-2/3 mx-auto rounded-t-sm" />
          <img alt={name} src={images[1]} className="w-2/3 mx-auto" />
        </div>

        <div className="px-[82.2px]" style={{marginTop: '-18px'}}>
          <div className="bg-white rounded-b-sm flex flex-col gap-3 py-5">
            <h1 className="font-bold text-xl text-black">{name}</h1>
            <p className="text-lg">{price.toFixed(2)}$</p>
          </div>
        </div>
      </Link>
    </SwiperSlide>
  );
};

const SwiperComponent = ({ number, spacing }) => {
  const [data, _, isLoading] = useFetch("/api/catalog", []);

  return (
    <div className="my-5">
      <Swiper
        spaceBetween={spacing}
        slidesPerView={number}
        breakpoints={{
          500: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        className="w-full bg-white dark:rounded-md"
      >
        {isLoading ? (
          <Skeleton className="bg-stone-300 h-[350px] dark:bg-[#191919]" />
        ) : (
          data?.map((card) => SwiperCard(card))
        )}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
