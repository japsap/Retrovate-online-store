'use client'

import { LoggedNavbar } from "@components/NavbarComponents";
import { useSession } from "next-auth/react";

import Image from "next/image";
import SearchSectionComponent from "@components/SearchSectionComponent";

//https://dribbble.com/shots/23044870-Electronic-Detail-Product details product

const page = () => {

  const { data: session } = useSession();

  return (
    <div>
      <LoggedNavbar />
      <div className="max-w-[105rem] mx-auto flex items-baseline gap-20 p-5">
        {/* left side */}
        <div className="column gap-3 w-full">
          {/* <div className="min-h-screen">

          </div> */}
          <SearchSectionComponent/>
        </div>
        
        {/* right side  */}
        <div className="hidden 2xl:flex flex-col flex-none basis-60 sticky top-0">
          <div className="column gap-3">
            <Image src={session?.user.image} width={60} height={60} className='rounded-full'/>
            <h1 className="text-lg font-bold">Hello, {session?.user.name}!</h1>
            <p className="text-stone-400 column gap-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              deleniti
              <span className="text-black font-bold cursor-pointer ">
                Learn more
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
