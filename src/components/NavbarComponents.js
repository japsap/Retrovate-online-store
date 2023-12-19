"use client";

import Link from "next/link";

import React, { useEffect, useRef, useState } from "react";
import { LoggedNavLinks, mainPageNavbar } from "@/constants/Data";

import { AlignJustify, ShoppingBag } from "lucide-react";

import { cn } from "@lib/utils";

import { redirect } from "next/navigation";

export const Navbar = () => {
  const mobilenavRef = useRef(null);
  const navbarRef = useRef();

  const toggleNavbar = () => {
    mobilenavRef.current?.classList.toggle("active");
  };

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        navbarRef.current.style.backdropFilter = "blur(16px)";
      } else {
        navbarRef.current.style.backdropFilter = "blur(0px)";
      }
    };
  }, []);

  return (
    <div className="fixed w-full top-0 z-[9]" ref={navbarRef}>
      <div
        className={cn(
          "mobile_navbar dark:bg-[#121212] bg-white p-5 border-r flex flex-col gap-5 border-r-[#dbdbdb] dark:border-[#262626]",
        )}
        ref={mobilenavRef}
      >
        <Link
          href="/"
          className="text-black dark:text-white flex z-40 font-semibold"
        >
          <span>retrovate.</span>
        </Link>
        <ul className="flex flex-col gap-3 text-lg">
          {mainPageNavbar.map((link, id) => (
            <li className="group-hover:text-gray-200 actives" key={id}>
              <a
                className="ease-out duration-300 hover:text-black dark:hover:text-stone-400"
                href={link.path}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3">
          <button className="fill-btn"><Link href='/account'>Register</Link></button>
          <button className="flex justify-center outline-btn-full"><a><ShoppingBag/></a></button>
        </div>
      </div>

      <div className="flex-between max-w-7xl mx-auto p-5">
        <Link
          href="/"
          className="text-black dark:text-white flex z-40 font-semibold"
        >
          <span>retrovate.</span>
        </Link>

        <ul className="hidden lg:flex justify-center ml-40 items-center gap-3 list-none group">
          {mainPageNavbar.map((link, id) => (
            <li className="group-hover:text-gray-200 actives" key={id}>
              <a
                className="ease-out duration-300 hover:text-black dark:hover:text-stone-400"
                href={link.path}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button className="fill-btn">
            <a href="/account">Register</a>
          </button>
          <div className="relative">
            <button className="outline-btn">
              <ShoppingBag size={18} />
            </button>
            <span className="absolute -top-2 -right-2 bg-primaryColor rounded-full px-2 text-center text-white"></span>
          </div>
          {/* <ModeToggle border={true} /> */}
        </div>

        <div
          className="flex lg:hidden cursor-pointer"
          onClick={() => toggleNavbar()}
        >
          <AlignJustify />
        </div>
      </div>
    </div>
  );
};


const cartItemFromLocalStorage = JSON.parse(sessionStorage.getItem("cart")) || [];

export const LoggedNavbar = ({ bgColor }) => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    let num = bgColor ? 0 : 700

    window.onscroll = function () {
      navbarScrollFunction();
    };

    function navbarScrollFunction() {
      if (
        document.body.scrollTop > num ||
        document.documentElement.scrollTop > num
      ) {
        navbarRef.current.style.backdropFilter = "blur(16px)";
        logoRef.current.style.color = "black";
        linksRef.current.style.color = "black";
      } else {
        navbarRef.current.style.backdropFilter = "blur(0px)";
        logoRef.current.style.color = "white";
        linksRef.current.style.color = "white";
      }
    }
  }, []);

  const [ cartLength, setCartLength ] = useState(0)

  useEffect(() => {
    setCartLength(cartItemFromLocalStorage.length)
  }, [cartItemFromLocalStorage.length])

  return (
    <div className={`sticky top-0 w-full z-[1000] ${!bgColor ? '-mt-[81px] text-white' : 'text-black '} navbar`} ref={navbarRef}>
      <div
        className="max-w-[105rem] mx-auto top-0 w-full  flex-between p-5  bg-transaprent"
      >
        <Link href="/" className="flex z-40 font-semibold">
          <span className={`${bgColor ? '' : 'navbar-logo'}`} ref={logoRef}>
            retrovate.
          </span>
        </Link>

        <ul
          className={`hidden lg:flex gap-10 list-none group ${bgColor ? "" : "navbar-links"}`}
          ref={linksRef}
        >
          {LoggedNavLinks.map((link, id) => (
            <li className="cursor-pointer text-base" key={id}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          {/*  */}
          <div className="relative cursor-pointer">
            <div className="flex items-center gap-3">
              <Link className="relative" href='/cart'>
                <div className="bg-white text-black rounded-full p-2">
                  <ShoppingBag size={25} className="navbar-icon" />
                </div>
                <span className="absolute text-black  -bottom-3 z-[1] -right-2 bg-primaryColor rounded-full h-[23px] w-[23px] text-center navbar-icon">
                  {cartLength}
                </span>
              </Link>
              <div className="flex lg:hidden text-black bg-white rounded-full p-2">
                <AlignJustify size={25} className="navbar-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
