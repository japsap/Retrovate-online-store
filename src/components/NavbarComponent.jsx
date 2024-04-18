"use client";

import { useRef, useContext } from "react";
import { signOut, useSession } from "next-auth/react";

import Link from "next/link";
import Image from "next/image";

import { dropdownMenu, navbarLinks } from "@constants/Data";

import { Button } from "./ui/button";

import {
  AlignJustify,
  Settings,
  User,
  X,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "./ui/dropdown-menu";

import DialogModal from "./ui/dialog-modal";
import CartContext from "@Context/CartContext";

const NavbarComponent = () => {
  const sidebarRef = useRef();

  const { cart } = useContext(CartContext);
  const { data: session } = useSession();

  return (
    <div className="max-w-wrapper relative flex justify-between items-center">
      <h1 className="font-bold uppercase">
        <Link href="/">Shop.</Link>
      </h1>
      <ul className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center gap-3">
        {navbarLinks.map((link, id) => (
          <li key={id}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <div className="flex gap-5 items-center">
        {!session ? (
          <div className="hidden lg:flex">
           <DialogModal />
          </div>
        ) : (
          <DropdownMenu className="border-0 z-[10000000000] bg-red-600">
            <DropdownMenuTrigger>
              <Image
                src={session?.user?.image}
                alt="user-img"
                height={50}
                width={50}
                className="rounded-full select-none"
              />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="flex flex-col gap-3 w-56 mt-3 p-3">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              {dropdownMenu.map((link, id) => (
                <DropdownMenuItem key={id} className="border-0">
                  <Link href={link.path}>
                    <div className="flex items-center gap-3 relative">
                      <i>{link.icon}</i>
                      {link.name}
                      {link.name === "Cart" && (
                        <span className="absolute text-black  -bottom-3 z-[1] left-[15%] bg-primaryColor rounded-full h-[23px] w-[23px] text-center navbar-icon">
                          {cart?.cartItems?.length === undefined
                            ? 0
                            : cart?.cartItems?.length}
                        </span>
                      )}
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem>
                <Link
                  href={`/account/${session?.user?.id}`}
                  className="flex items-center gap-3  "
                >
                  <User />
                  Account
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={`/settings/${session?.user?.id}`}
                  className="flex items-center gap-3"
                >
                  <Settings />
                  Settings
                </Link>
              </DropdownMenuItem>
              <Button className="w-full" onClick={signOut}>
                Log out
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      <div className="flex lg:hidden">
        <AlignJustify
          className="cursor-pointer"
          onClick={() => sidebarRef.current.classList.toggle("active")}
        />

        <div ref={sidebarRef} className="sidebar animation">
          <div
            className="flex-between mt-3"
            onClick={() => sidebarRef.current.classList.toggle("active")}
          >
            <h1 className="font-bold">SHOP.</h1>
            <X className="cursor-pointer text-red-600" />
          </div>

          <div class="flex flex-col gap-3">
            {navbarLinks.map((link, id) => (
              <li key={id} className="list-none">
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
