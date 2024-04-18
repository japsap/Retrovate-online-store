'use client'

import { Button } from "@components/ui/button";

import LookMore from "@components/ui/look-more";
import SwiperComponent from "@components/SwiperComponent";
import { useSession } from "next-auth/react";
import DialogModal from "@components/ui/dialog-modal";
import FooterComponent from "@components/FooterComponent";


const page = () => {

  const { data: session } = useSession() 
  
  return (
    <div>
      <header className="relative flex flex-col justify-center min-h-[80vh] lg:min-h-[120vh]">
        <div className="flex-center-column gap-5 max-w-wrapper">
          <h1 className="flex gap-0 text-4xl lg:text-7xl font-bold text-center">
            Discover Unparalleled Style at Our Online Fashion Boutique
          </h1>
          <p className="max-w-4xl mx-auto text-center">
            Step into a world of unparalleled style with our curated selection
            of fashion essentials. From timeless classics to the latest trends,
            find your perfect pieces with ease and convenience.
          </p>
          <div className="flex items-center justify-center mx-auto gap-3">
           {session?.user ? <Button>Account</Button> : <DialogModal/>} 
          </div>
        </div>

        <img
          src="/images/header/sofa-1.png"
          className="w-full z-[-1] top-[40%] hidden lg:flex"
        />
      </header>

      <section id='learn-more' className="flex flex-col gap-3 max-w-[105rem] mx-auto px-5 3xl:px-0">
        <div className="flex-between">
          <h1 className="text-xl font-bold">Newest Products</h1>
          <LookMore />
        </div>
        <SwiperComponent spacing={0} number={3} />
      </section>
    </div>
  );
};

export default page;
