"use client";

import Link from "next/link";

import React, { useRef } from "react";
import { Logo } from "./fixedComponents";
import { LoggedNavLinks, mainPageNavbar } from "@/constants/Data";

import { AlignJustify, ShoppingBag, ShoppingCart } from "lucide-react";

import { ModeToggle } from "./fixedComponents";

export const Navbar = () => {
  const mobilenavRef = useRef(null);
  const navbarRef = useRef()

  const toggleNavbar = () => {
    mobilenavRef.current?.classList.toggle("active");
  };

  window.onscroll = function(){
    scrollFunction()
  }

  const scrollFunction = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      navbarRef.current.style.backdropFilter = "blur(16px)";
    } else {
      navbarRef.current.style.backdropFilter = "blur(0px)";
    }
  }

  return (
    <div className="fixed w-full top-0 z-[9]" ref={navbarRef}>
      <div className="mobile_navbar" ref={mobilenavRef}>
        <h1>cickiasdasdasdasdasd</h1>
      </div>

      <div className="flex-between max-w-7xl mx-auto p-5">

        <Link href="/" className="text-black dark:text-white flex z-40 font-semibold">
          <span>
            retrovate.
          </span>
        </Link>

        <ul className="hidden lg:flex justify-center items-center gap-3 list-none group">
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
              <ShoppingCart size={18} />
            </button>
            <span className="absolute -top-2 -right-2 bg-primaryColor rounded-full px-2 text-center text-white"></span>
          </div>
          <ModeToggle border={true} />
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

export const LoggedNavbar = ({ bgColor }) => {
  const navbarRef = useRef();
  const logoRef = useRef();
  const linksRef = useRef();

  window.onscroll = function () {
    navbarScrollFunction();
  };

  function navbarScrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
      navbarRef.current.style.backdropFilter = "blur(16px)";
      logoRef.current.style.color = "black";
      linksRef.current.style.color = "black";
    } else {
      navbarRef.current.style.backdropFilter = "blur(0px)";
      logoRef.current.style.color = "white";
      linksRef.current.style.color = "white";
    }
  }

  return (
    <div className="fixed top-0 w-full z-[1000] navbar" ref={navbarRef}>
      <div
        className={`${
          bgColor ? "bg-[#1A1A1A] mt-2 rounded-3xl" : ""
        } max-w-[105rem] mx-auto top-0 w-full  flex-between p-5  bg-transaprent`}
      >
        <Link href="/" className="flex z-40 font-semibold">
          <span className="navbar-logo" ref={logoRef}>
            retrovate.
          </span>
        </Link>

        <ul
          className="hidden lg:flex gap-10 list-none group navbar-links"
          ref={linksRef}
        >
          {LoggedNavLinks.map((link, id) => (
            <li className="cursor-pointer text-base" key={id}>
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
                <div className="bg-white dark:text-black rounded-full p-2">
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
    </div>
  );
};
