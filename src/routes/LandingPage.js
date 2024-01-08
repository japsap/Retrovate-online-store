"use client";
import "swiper/css";

import Image from "next/image";

import React from "react";
import { frequentlyAskedQuestions, swiperGallery } from "@/constants/Data";

import { ArrowDown, ArrowRight, Mail  } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navbar } from "@components/NavbarComponents";
import IndexPageCard from "@components/cards/IndexPageCard";
import { Accordion } from "@components/ui/accordion";
import AccordeonCard from "@components/cards/AccordeonCard";
import FooterComponent from "@components/FooterComponent";

const LandingPage = () => {
  return (
    <div className="dark:bg-[#dark:text-black]">
      <Navbar/>
      <header className="min-h-screen flex-center overflow-hidden">
        <div className="column gap-10 -mt-[100px]">
          <h1 className="text-6xl lg:text-9xl text-center">
            Timeless elegance <br /> in{" "}
            <span className="font-serif text-primaryColor">every</span> piece
          </h1>

          <div className="z-[1] hidden lg:flex">
            <img
             alt="header image"
              className="absolute top-32 right-10 w-[300px] h-auto rounded-lg"
              src=" https://images.pexels.com/photos/6636258/pexels-photo-6636258.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <img
              alt="header image"
              className="absolute top-32 left-9 w-[300px] h-auto rounded-lg"
              src="https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <img
             alt="header image"
              className="absolute hidden top-[21.5%] left-[65%] w-[150px] 2xl:flex h-auto rounded-lg"
              src="https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <img
             alt="header image"
              className="absolute top-[15%] left-[40%] w-[250px] h-auto rounded-lg"
              src="https://images.pexels.com/photos/4846436/pexels-photo-4846436.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <img
             alt="header image"
              className="absolute w-[300px] h-auto rounded-lg"
              src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
          </div>

          <div className="z-[-1] flex lg:hidden">
            <img
              alt="header image"
                className="absolute top-32 right-10 w-[70px] h-auto rounded-lg"
                src=" https://images.pexels.com/photos/6636258/pexels-photo-6636258.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
              <img
             alt="header image"
              className="absolute top-[15%] left-[10%] w-[120px] h-auto rounded-lg"
              src="https://images.pexels.com/photos/4846436/pexels-photo-4846436.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
                <img
             alt="header image"
              className="absolute w-[120px] left-10 h-auto rounded-lg"
              src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
          </div>

          <div className="flex-center items-center gap-3 cursor-pointer group">
            <a href="#about_section" className="text-sm">
              Discover
            </a>
            <ArrowDown size={16} className="group-hover:animate-bounce"/>
          </div>
        </div>
      </header>

      <section id="about_section" className="max-width-wrapper">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center justify-between">
          <h1 className="text-3xl lg:text-7xl font-bold">Furniture for every room</h1>
          <button className="outline-btn flex items-center gap-3 group">
            Browse all categories
            <ArrowRight size={16} className="group-hover:animate-bounce-right" />
          </button>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={40}
          className="mt-5 select-none cursor-grab active:cursor-grabbing"
          breakpoints={{
            200: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {swiperGallery.map((slide, id) => (
            <SwiperSlide key={id}>
              <IndexPageCard {...slide}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="max-width-wrapper column gap-20 mt-[250px]">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center justify-between">
          <h1 className="text-3xl lg:text-7xl font-bold">Frequently asked questions</h1>
          <button className="outline-btn flex items-center gap-3 group">
            <span>Contact Us</span>
            <Mail size={16} className="group-hover:animate-bounce"/>
          </button>
        </div>

        <Accordion className="text-left column gap-10">
          {frequentlyAskedQuestions.map((questions, id) => (
              <AccordeonCard key={id} {...questions}/>
          ))}
        </Accordion>
      </section>
     <FooterComponent/>
    </div>
  )
}

export default LandingPage