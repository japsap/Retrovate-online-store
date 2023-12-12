"use client";
import * as React from "react"


import Image from "next/image";

import { Swiper, SwiperSlide} from "swiper/react";
import { sofaSwiper } from "@constants/Data";

import "swiper/css";

import { Plus, Moon, Sun } from "lucide-react";
import ItemsCard from "./cards/ItemsCard";

import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { redirect } from "next/navigation";

export const Logo = ({ logoTextRef }) => {
  return (
    <div
      className="flex-start gap-3 cursor-pointer"
      onClick={() =>  redirect('/')}
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
      <span className="animation dark:text-black opacity-0 group-hover:opacity-100 ml-5 texts-sm font-bold">Add to Cart</span>
      <button className="animation  dark:bg-transparent bg-white border-2 border-primaryColor rounded-full p-2 group-hover:text-black group-hover:rotate-[360deg]">
        <Plus />
      </button>
    </div>
  );
};

 
export const ModeToggle = ({ border }) => {
  const { setTheme } = useTheme()
   
  return (
    <DropdownMenu className="dark:bg-[#121212] z-[1]">
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={` border-2 outline-none ${border ? 'border-black dark:border-white' : 'border-none bg-white rounded-full' } `} size="icon">
          <Sun size={18} className="font-bold dark:text-black h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon size={18} className={`font-bold ${border ? 'dark:text-white' : 'dark:text-black' } absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100`}/>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark:bg-[#121212] cursor-pointer">
        <DropdownMenuItem onClick={() => setTheme("light")} className="hover:bg-transparent">
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
  )
}