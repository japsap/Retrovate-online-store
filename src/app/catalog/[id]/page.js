"use client";

import React, { useContext, useEffect  } from "react";
import { useParams } from "next/navigation";

import useFetch from "@hooks/useFetch";

import { CheckCircle, Heart, ShoppingBag, Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

import { getSession } from "next-auth/react";

import CartContext from "@Context/CartContext";
import Link from "next/link";
import { Skeleton } from "@components/ui/skeleton";

import { Button } from "@components/ui/button";
import { isAuthFunc } from "@lib/utils";

const page = () => {
  const { id } = useParams();
  const { addItemToCart } = useContext(CartContext);

  const [data, _, isLoading] = useFetch(`/api/catalog/${id}`, []);

  const { _id, name, image, desc, images, innerDescription, categorty, price } =
    data;

  useEffect(() => {
    isAuthFunc()
  }, []);

  const addToCartHandler = () => {
    addItemToCart({
      product: _id,
      name,
      price,
      image,
    });
  };

  const { cart } = useContext(CartContext);

  return (
    <div>
      <div className="max-w-[105rem] mx-auto px-5">
        <div className="relative flex items-start justify-between  flex-col lg:flex-row gap-20">
          {/* pc version */}
          <div className="hidden lg:grid grid-cols-1 gap-3 lg:grid-cols-2 w-full lg:w-[60%] ">
            {isLoading
              ? [1, 2, 3, 4, 5, 6].map((_, id) => (
                  <Skeleton
                    className="bg-stone-300 dark:bg-[#191919] h-[350px] w-full"
                    key={id}
                  />
                ))
              : images?.map((i, index) => (
                  <img key={index} src={i} className="w-full h-auto" />
                ))}
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
            <p className="flex gap-3 items-center">
              Category:{" "}
              {isLoading ? (
                <Skeleton className="bg-stone-300 dark:bg-[#191919] h-4 w-20" />
              ) : (
                categorty
              )}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold">
              {isLoading ? (
                <Skeleton className="bg-stone-300  dark:bg-[#191919] h-20 w-56" />
              ) : (
                name
              )}
            </h1>
            <p className="text-stone-400">
              {isLoading ? (
                <Skeleton className="bg-stone-300 dark:bg-[#191919] h-4 w-20" />
              ) : (
                desc
              )}
            </p>
            <div className="flex items-center gap-3">
              <Star size={20} />
              <p className="text-[#121212] text-sm font-bold">
                (4,9) 9,2K Reviews
              </p>
            </div>
            <p className="leading-1">
              {isLoading ? (
                <div className="flex flex-col gap-3">
                  <Skeleton className="bg-stone-300 dark:bg-[#191919] h-4 w-1/3" />{" "}
                  <Skeleton className="bg-stone-300 dark:bg-[#191919] h-4 w-2/3" />{" "}
                  <Skeleton className="bg-stone-300 dark:bg-[#191919] h-4 w-full" />{" "}
                  <Skeleton className="bg-stone-300 dark:bg-[#191919] h-4 w-full" />{" "}
                  <Skeleton className="bg-stone-300 dark:bg-[#191919] h-4 w-full" />{" "}
                </div>
              ) : (
                innerDescription
              )}
            </p>
            <h1 className="text-5xl font-bold">
              ${isLoading ? "1000.00" : Number(price).toFixed(2)}
            </h1>
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
                <Button
                  className='w-full h-[50px]'
                  onClick={addToCartHandler}
                >
                  Add To Cart
                </Button>
                <Button variant='outline' className="h-[60px]" >
                  <Link href="/cart">
                    <ShoppingBag />
                    <span className="absolute text-black  -bottom-3 z-[1] -right-2 bg-primaryColor rounded-full h-[23px] w-[23px] text-center navbar-icon">
                      {cart?.cartItems?.length === undefined
                        ? 0
                        : cart?.cartItems?.length}
                    </span>
                  </Link>
                </Button>
                <Button variant='outline' className="h-[60px]">
                  <Heart />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
