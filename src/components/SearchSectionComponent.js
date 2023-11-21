import React from "react";

import { Info } from "lucide-react";
import { sofaSwiper } from "@constants/Data";
import { ProductsSwiper } from "./fixedComponents";

import Image from "next/image";

const SearchSectionComponent = () => {
  return (
    <div className="flex flex-col w-full gap-3">
      {/* search for */}
      <div className="flex flex-col md:flex-row justify-between gap-3 md:items-center ">
        <div className="flex items-center gap-1">
          <h1 className="text-xl text-stone-500">Searching for:</h1>
          <span className="font-bold text-xl underlineText">Sofa</span>
        </div>

        <p className="font-bold flex items-center gap-3 text-sm">
          <Info className="text-stone-400" size={16} />
          {sofaSwiper.length} items found based on your search
        </p>
      </div>
      {/* search for */}

      {/* sofias icon */}
      <div className="flex items-center gap-5 mt-5">
        <Image
          src={"/images/icons/sofa.png"}
          width={35}
          height={35}
          className="opacity-[0.5]"
        />
        <div className="column">
          <h1 className="text-lg text-stone-500">Welcome!</h1>
          <p className="text-sm text-stone-400">
            Feel free to check out all our sofa's.
          </p>
        </div>
      </div>
      {/* sofias icon*/}

      {/* sofas swiper */}
      <div className="flex flex-col 2xl:flex-row  justify-between items-center min-h-[30vh] w-full mt-5">
        <div className="column gap-2 w-full">
          <h1 className="text-4xl font-bold text-black">
            You Might <br className="hidden md:flex" />
            Like
          </h1>
          <p className="text-stone-400">1 Of {sofaSwiper.length}</p>
        </div>
        <ProductsSwiper />
      </div>
      {/* sofas swiper */}
    </div>
  );
};

export default SearchSectionComponent;
