"use client";

import React from "react";
import { Logo } from "./fixedComponents";
import { LoggedNavLinks, mainPageNavbar } from "@/constants/Data";

import { Search, ShoppingCart } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="sticky w-full top-0 bg-white z-[9]">
      <div className="flex-between max-w-7xl mx-auto p-5">
        <Logo />

        <ul className="hidden lg:flex items-center gap-3 list-none group">
          {mainPageNavbar.map((link, id) => (
            <li className="group-hover:text-gray-200" key={id}>
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

export const LoggedNavbar = () => {
  return (
    <div className="flex-between gap-5 p-5 px-10 bg-transaprent">
      <Logo />
      <ul className="hidden lg:flex items-center gap-10 list-none group">
        {LoggedNavLinks.map((link, id) => (
          <li
            className="group-hover:text-gray-200 cursor-pointer text-lg"
            key={id}
          >
            <a
              className="ease-out duration-300 hover:text-black"
              href={link.path}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <div className="input_container relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2" />
          <input
            placeholder="Seach Products"
            className="box-border p-2 px-12 outline-none rounded-md focus:border focus:border-gray-200 w-full"
          />
        </div>
        <div className="relative cursor-pointer">
          <ShoppingCart size={25} />
          <span className="absolute -bottom-3 z-[-1] -right-4  bg-primaryColor rounded-full h-[23px] w-[23px] text-center text-black">1</span>
        </div>
      </div>
    </div>
  );
};
