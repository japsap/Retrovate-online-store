"use client";
import * as React from "react";

import Image from "next/image";
import { redirect } from "next/navigation";

import "swiper/css";
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { Plus, Moon, Sun } from "lucide-react";

import ItemsCard from "./cards/ItemsCard";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Logo = ({ logoTextRef }) => {
  return (
    <div
      className="flex-start gap-3 cursor-pointer"
      onClick={() => redirect("/")}
    >
      <Image width={50} height={50} src={"/images/logo.png"} alt="Logo Image" />
      <h3 className="navbar-logo hidden md:flex text-xl" ref={logoTextRef}>
        Retrovate
      </h3>
    </div>
  );
};

export const ProductsSwiper = ({
  setSwiperRef,
  catalog,
  isLoading,
}) => {
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
        {catalog?.map((swiperItem, i) => (
            <SwiperSlide key={i}>
              <ItemsCard
                swiperItem={swiperItem}
                id={i}
                isLoading={isLoading}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export const BuyBtn = () => {
  return (
    <div
      className="animation flex items-center group-hover:bg-primaryColor justify-between gap-5 group  w-max rounded-full cursor-pointer mt-2"
      onClick={() => {}}
    >
      <span className="animation dark:text-black opacity-0 group-hover:opacity-100 ml-5 texts-sm font-bold">
        Add to Cart
      </span>
      <button className="animation  dark:bg-[#121212] bg-white border-2 border-primaryColor rounded-full p-2  group-hover:rotate-[360deg]">
        <Plus />
      </button>
    </div>
  );
};

export const ModeToggle = ({ border }) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu className="dark:bg-[#121212] z-[1]">
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={` border-2 outline-none ${
            border
              ? "border-black dark:border-white"
              : "dark:bg-[#262626] border-none rounded-full"
          } `}
          size="icon"
        >
          <Sun
            size={18}
            className="font-bold dark:text-black h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Moon
            size={18}
            className={`font-bold absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark:bg-[#121212] cursor-pointer">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="hover:bg-transparent"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const CatalogSwiper = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={true}
      autoplay={true}
      modules={[Pagination, Autoplay]}
      style={{
        "--swiper-pagination-color": "#FFBA08",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "5px",
        "--swiper-pagination-bullet-horizontal-gap": "6px"
      }}
      className="mySwiper w-full"
    >
      <SwiperSlide>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full bg-stone-200 dark:bg-[#191919] p-5 mb-5 rounded-lg">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl lg:text-5xl font-bold">Extra 15% Off</h1>
            <h1 className="text-2xl lg:text-4xl text-stone-400">
              New Collections of Furniture
            </h1>
            <span className="text-primaryColor font-bold text-2xl cursor-pointer">
              More
            </span>
          </div>
          <div className="relative">
            <img src="/images/chair.png" className="lg:w-[400px] h-auto" />
            <span className="h-20 w-20 absolute bottom-1/2 right-0 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-center p-3">
              BIG
              <br /> SALE
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full bg-stone-200 dark:bg-[#191919] p-5 mb-5 rounded-lg">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl lg:text-5xl font-bold">Extra 15% Off</h1>
            <h1 className="text-2xl lg:text-4xl text-stone-400">
              New Collections of Furniture
            </h1>
            <span className="text-primaryColor font-bold text-2xl cursor-pointer">
              More
            </span>
          </div>
          <div className="relative">
            <img src="/images/chair.png" className="lg:w-[400px] h-auto" />
            <span className="h-20 w-20 absolute bottom-1/2 right-0 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-center p-3">
              BIG
              <br /> SALE
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full bg-stone-200 dark:bg-[#191919] p-5 mb-5 rounded-lg">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl lg:text-5xl font-bold">Extra 15% Off</h1>
            <h1 className="text-2xl lg:text-4xl text-stone-400">
              New Collections of Furniture
            </h1>
            <span className="text-primaryColor font-bold text-2xl cursor-pointer">
              More
            </span>
          </div>
          <div className="relative">
            <img src="/images/chair.png" className="lg:w-[400px] h-auto" />
            <span className="h-20 w-20 absolute bottom-1/2 right-0 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-center p-3">
              BIG
              <br /> SALE
            </span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
