'use client'

import { LoggedNavbar } from "@components/NavbarComponents";

import SearchSectionComponent from "@components/SearchSectionComponent";
import HeaderSection from "@components/HeaderSection";
import AccountCard from "@components/cards/AccountCard";
import { ModeToggle } from "@components/fixedComponents";

//https://dribbble.com/shots/23044870-Electronic-Detail-Product details product
// https://www.behance.net/gallery/52433389/Shopping-made-personal-IKEA-online-experience-concept - main page


const page = () => {
  return (
    <div>
      <LoggedNavbar />
      <div className=" items-start flex gap-20">
        {/* left side */}
        <div className="column gap-3 w-full">
          <HeaderSection/>
          <SearchSectionComponent/>
        </div>
        
        {/* right side  */}
        <div className="sticky top-20 hidden 2xl:flex flex-col flex-none basis-[20rem] mt-[100px]">
          <AccountCard/>
        </div>
      </div>
      <div className="fixed z-[1000000000000000000] right-3 bottom-3">
        <ModeToggle border={false}/>
      </div>
    </div>
  );
};

export default page;
