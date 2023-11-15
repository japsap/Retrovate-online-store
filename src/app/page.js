"use client";
import "swiper/css";

import Image from "next/image";

import { useState } from "react";
import { frequentlyAskedQuestions, swiperGallery } from "@/constants/Data";

import { ArrowDown, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

const page = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <header className="min-h-screen flex-center">
        <div className="column gap-10 -mt-[100px]">
          <h1 className="text-6xl lg:text-9xl text-center">
            Timeless elegance <br /> in{" "}
            <span className="font-serif text-primaryColor">every</span> piece
          </h1>

          <div className="z-[-1] hidden lg:flex">
            <img
              className="absolute top-32 right-10 w-[300px] h-auto rounded-lg"
              src=" https://images.pexels.com/photos/6636258/pexels-photo-6636258.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <img
              className="absolute top-32 left-9 w-[300px] h-auto rounded-lg"
              src="https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <img
              className="absolute hidden top-[21.5%] left-[65%] w-[150px] 2xl:flex h-auto rounded-lg"
              src="https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <img
              className="absolute top-[15%] left-[40%] w-[250px] h-auto rounded-lg"
              src="https://images.pexels.com/photos/4846436/pexels-photo-4846436.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <img
              className="absolute w-[300px] h-auto rounded-lg"
              src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
          </div>

          <div className="flex-center gap-3 cursor-pointer">
            <a href="#about_section" className="text-sm">
              Discover
            </a>
            <ArrowDown size={16} />
          </div>
        </div>
      </header>

      <section id="about_section" className="max-width-wrapper">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center justify-between">
          <h1 className="text-3xl lg:text-7xl">Furniture for every room</h1>
          <button className="outline-btn flex-between">
            Browse all categories
            <ArrowRight size={16} />
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
              <div className="relative">
                <img
                  className="w-full lg:w-[300px] h-[200px] object-fill rounded-lg brightness-[0.65]"
                  src={slide.img}
                />
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl">
                  {slide.name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="max-width-wrapper column gap-20 mt-[250px]">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center justify-between">
          <h1 className="text-3xl lg:text-7xl">Frequently asked questions</h1>
          <button className="outline-btn">Contact Us</button>
        </div>

        <div className="column gap-10">
          {frequentlyAskedQuestions.map((questions, id) => (
            <div
              className="flex-between cursor-pointer"
              key={id}
              onClick={() => handleItemClick(id)}
            >
              <div className=" column gap-3">
                <h1 className="text-xl lg:text-2xl">{questions.question}</h1>
                {activeIndex === id && <p>{questions.answer}</p>}
              </div>
              <div className="">
                {activeIndex === id ? (
                  <ChevronDown size={35} />
                ) : (
                  <ChevronRight size={35} />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>


      <footer className="w-full bg-black mt-[100px]">
        <div className="p-10 flex flex-col lg:flex-row items-baseline justify-around">
          <div className="column gap-3 max-w-[350px]">
            <Image src="/images/logo.png" width={60} height={60}/>
            <h1 className="text-2xl font-bold text-white">Retrovate</h1>
            <p className="text-stone-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, illum.</p>
          </div>
          <div className="column gap-5 text-white">
            <h1 className="font-semibold text-xl text-white">Pages</h1>
              <ul>
                <li>Products</li>
                <li>Collections</li>
                <li>About</li>
              </ul>
          </div>
          <div className="column gap-5 text-white">
            <h1 className="font-bold text-xl text-white">Company</h1>
              <ul>
                <li>Privacy polcy</li>
                <li>Terms & Conditions</li>
              </ul>
          </div>
          <div className="column gap-5 text-white">
            <h1 className="font-bold text-xl text-white">Social</h1>
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Pinterest</li>
                <li>LinkedIn</li>
              </ul>
          </div>
        </div>
        <div className="gradient-line"/>
        <p className="text-stone-400 py-5 text-center">© Retrovate Inc. All right reserved</p>
      </footer>
    </div>
  );
};

export default page;
