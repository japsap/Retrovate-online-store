"use client";

import { LoggedNavbar } from "@components/NavbarComponents";
import SearchSectionComponent from "@components/sections/SearchSectionComponent";
import HeaderSection from "@components/sections/HeaderSection";
import AccountCard from "@components/cards/AccountCard";
import { ModeToggle } from "@components/fixedComponents";
import ItemsInfoSection from "@components/sections/ItemsInfoSection";
import ImagesSection from "@components/sections/ImagesSection";

const Catalog = () => {
  return (
    <div>
      <LoggedNavbar />
      <div className=" items-start flex gap-20">
        {/* left side */}
        <div className="column gap-3 w-full">
          <HeaderSection />
          <div className="max-w-[1450px] mx-auto px-5 w-full">
            <SearchSectionComponent />
            <ItemsInfoSection />
            <ImagesSection/>
          </div>
        </div>

        {/* right side  */}
        <div className="sticky top-20 hidden 2xl:flex flex-col flex-none basis-[20rem] mt-[100px]">
          <AccountCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;