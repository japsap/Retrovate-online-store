"use client";

import React, { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "@hooks/useFetch";

import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

import { Skeleton } from "./ui/skeleton";
import AddToCarTButton from "./ui/add-to-card-btn";
import ProductCard from "./cards/ProductCard";



const SwiperComponent = ({ number, spacing }) => {
  const [data, _, isLoading] = useFetch("/api/catalog", []);

  return (
    <div className="my-5 ">
      <Swiper
        spaceBetween={spacing}
        slidesPerView={number}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 1,
          },
          800: {
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
          data?.map((card) => {

            return (
              <SwiperSlide
                key={card._id}
                className="flex flex-col justify-center items-center text-center cursor-pointer select-none relative"
              >
                <ProductCard {...card} />
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
