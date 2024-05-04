"use client";

import { Button } from "@components/ui/button";

import LookMore from "@components/ui/look-more";
import SwiperComponent from "@components/SwiperComponent";
import { useSession } from "next-auth/react";
import DialogModal from "@components/ui/dialog-modal";
import FooterComponent from "@components/FooterComponent";
import { Armchair, Home, MoveUpRight, Sofa, Tv } from "lucide-react";
import Border from "@components/ui/border";

const page = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col gap-14">
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
            {session?.user ? <Button>Account</Button> : <DialogModal />}
          </div>
        </div>

        <img
          src="/images/header/sofa-1.png"
          className="w-full z-[-1] top-[40%] hidden lg:flex drop-shadow-2xl	"
        />
      </header>

      <section className="max-width-wrapper flex flex-col gap-14">
        <div className="flex justify-center items-center flex-col gap-5">
          <h1 className="text-2xl lg:text-5xl font-bold flex items-center gap-3">
            About <Home size={50} />{" "}
            <span className="text-underline">SHOP.</span>
          </h1>

          <p className="max-w-[800px] text-lg text-center">
            Welcome to <strong className="text-primaryColor">SHOP</strong>, your
            destination for exquisite furniture. Discover timeless pieces
            blending style and comfort, curated to elevate your home.
          </p>
        </div>

        <div className="grid gap-10 2xl:gap-0 justify-between grid-cols-1 lg:grid-cols-2">
          <img
            className="w-full lg:w-max rounded-md "
            src="https://www.ikea.com/us/en/images/products/backsaelen-sofa-with-chaise-hallarp-gray__0950590_pe800524_s5.jpg?f=s"
          />
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <span className="uppercase text-stone-400 text-xl lg:text-3xl">
                  01
                </span>
                <h1 className="text-xl lg:text-4xl font-bold">
                  High Quality Material
                </h1>
              </div>
              <Sofa className="text-stone-400" />
            </div>
            <Border />

            <p className="max-w-[700px]">
              At SHOP, we pride ourselves on sourcing only the finest materials
              for our furniture pieces. Each item in our collection is crafted
              using high-quality materials known for their durability,
              longevity, and aesthetic appeal. From premium hardwoods like oak
              and walnut to luxurious upholstery fabrics and top-grain leather,
              we prioritize materials that not only look stunning but also stand
              the test of time. Our commitment to quality ensures that every
              piece you bring into your home from SHOP is an investment in
              comfort, style, and lasting beauty.
            </p>

            <div className="grid gap-5 mt-5 justify-between grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col gap-3 bg-[#252525] p-5 rounded-md">
                <div className="flex-between">
                  <Armchair className="text-stone-400"/>
                  <p>7.9.23</p>
                </div>
                <div className="flex-between">
                  <div className="flex flex-col">
                    <h1 className="text-white font-semibold text-lg md:text-2xl max-w-[170px]">The most popular chairs</h1>
                    <p>Only the top</p>
                  </div>
                  <span className="bg-white p-2 rounded-full cursor-pointer"><MoveUpRight className="text-black" /></span>
                </div>
              </div>
              <div className="flex flex-col gap-3 bg-[#252525] p-5 rounded-md">
                <div className="flex-between">
                  <Tv className="text-stone-400"/>
                  <p>9.10.23</p>
                </div>
                <div className="flex-between">
                  <div className="flex flex-col">
                    <h1 className="text-white font-semibold text-lg md:text-2xl max-w-[100px]">Technological Tables</h1>
                    <p>Our Secrets</p>
                  </div>
                  <span className="bg-white p-2 rounded-full cursor-pointer"><MoveUpRight className="text-black" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="learn-more"
        className="flex flex-col gap-3 w-full lg:max-w-[105rem] mx-auto px-5 2xl:px-0"
      >
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
