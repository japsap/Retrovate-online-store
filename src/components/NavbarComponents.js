"use client";

import React, { useRef } from "react";
import { Logo } from "./fixedComponents";
import { LoggedNavLinks, mainPageNavbar } from "@/constants/Data";

import { AlignJustify, Search, ShoppingBag, ShoppingCart } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="w-full top-0 z-[9]">
      <div className="flex-between max-w-7xl mx-auto p-5">
        <Logo />

        <ul className="hidden lg:flex justify-center items-center gap-3 list-none group">
          {mainPageNavbar.map((link, id) => (
            <li className="group-hover:text-gray-200 actives" key={id}>
              <a
                className="ease-out duration-300 hover:text-black"
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
              <ShoppingCart size={18} />
            </button>
            <span className="absolute -top-2 -right-2 bg-primaryColor rounded-full px-2 text-center text-white"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoggedNavbar = ({ bgColor }) => {
  const linksRef = useRef();
  const logoTextRef = useRef();

  // window.onscroll = function () {
  //   navbarScrollFunction();
  // };

  // function navbarScrollFunction() {
  //   if (
  //     document.body.scrollTop > 650 ||
  //     document.documentElement.scrollTop > 650
  //   ) {
  //     linksRef.current.style.color = "black";
  //     logoTextRef.current.style.color = "black";
  //   } else {
  //     linksRef.current.style.color = "white";
  //     logoTextRef.current.style.color = "white";
  //   }
  // }

  return (
    <div className={`${bgColor ?'bg-[#1A1A1A] mt-2 rounded-3xl' : ''} max-w-[105rem] mx-auto top-0 w-full left-1/2 -translate-x-1/2 fixed flex-between p-5  bg-transaprent`}>
      <Logo logoTextRef={logoTextRef} />
      <ul
        className="hidden lg:flex gap-10 list-none group navbar-links"
        ref={linksRef}
      >
        {LoggedNavLinks.map((link, id) => (
          <li className="cursor-pointer text-lg" key={id}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>

      {/* <button onClick={( )=>  signOut()}>log out</button> */}

      <div className="flex items-center gap-3">
        {/*  */}
        <div className="relative cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="bg-white rounded-full p-2">
                <ShoppingBag size={25} className="navbar-icon" />
              </div>
              <span className="absolute -bottom-3 z-[1] -right-2 bg-primaryColor rounded-full h-[23px] w-[23px] text-center navbar-icon">
                1
              </span>
            </div>
            <div className="flex lg:hidden bg-white rounded-full p-2">
              <AlignJustify size={25} className="navbar-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
