"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { LoggedNavbar } from "@components/NavbarComponents";
import ItemsCard from "@components/cards/ItemsCard";
import FooterComponent from "@components/FooterComponent";

import useFetch from "@hooks/useFetch";

import { CheckCircle, Heart, ShoppingBag, Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useToast } from "@components/ui/use-toast";
import SpinnerComponent from "@components/SpinnerComponent";

const itemsPickedByUser = JSON.parse(sessionStorage.getItem("items")) || [];
const cartItemFromLocalStorage =
  JSON.parse(sessionStorage.getItem("cart")) || [];

const page = () => {
  const { id } = useParams();
  const { toast } = useToast();

  const [data, _, isLoading] = useFetch(`/api/catalog/${id}`, []);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState("");
  const [cart, setCart] = useState(cartItemFromLocalStorage);

  const { name, image, desc, innerDescription, categorty, price } = data;

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setAdded(false);
    let added = false;

    cart?.forEach((product) => {
      if (item._id == product._id) {
        added = true;
      }
    });

    if (added) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Item already in your cart!",
      });
      setAdded(true);

      setTimeout(() => {
        setError("");
      }, 2000);

      return;
    }

    toast({
      variant: "green",
      title: "Success!",
      description: "The item was successfully added in your cart!",
    });
    setCart([...cart, item]);
  };

  return (
    <div>
      <LoggedNavbar bgColor={true} />
      <p>{error}</p>
      <div className="max-w-[105rem] mx-auto px-5">
        <div className="relative flex items-start justify-between  flex-col lg:flex-row gap-20">
          {/* pc version */}
          <div className="hidden lg:grid grid-cols-1 gap-3 lg:grid-cols-2 w-full lg:w-[60%] ">
            {isLoading ? (
              <SpinnerComponent />
            ) : (
              [1, 2, 3, 4, 5, 6].map((_, index) => (
                <img key={index} src={image} className="w-full h-auto" />
              ))
            )}
          </div>
          {/* pc version */}

          {/* mobile version */}
          <div className="flex lg:hidden">
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
              className="flex lg:hidden grid-cols-1 gap-3 lg:grid-cols-2 w-full lg:w-[60%]w-full basis-2/3 select-none"
            >
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <SwiperSlide>
                  <img key={index} src={image} className="w-full h-auto " />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* mobile version */}

          <div className="sticky top-20 flex flex-col gap-6 w-full lg:w-[40%]">
            <p>Category: {categorty}</p>
            <h1 className="text-2xl md:text-5xl font-bold">{name}</h1>
            <div className="flex items-center gap-3">
              <Star size={20} />
              <p className="text-[#121212] text-sm font-bold">
                (4,9) 9,2K Reviews
              </p>
            </div>
            <p className="leading-1">{innerDescription}</p>
            <h1 className="text-5xl font-bold">${price}</h1>
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
                  onClick={() => addToCart(data)}
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
        <div className="flex flex-col gap-3 mt-5">
          <h1 className="text-2xl md:text-6xl font-bold">
            Get Similar Products
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
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default page;
