import React from "react";

import { Search } from "lucide-react";

const HeaderSection = () => {
  return (
    <div className="bg-login-header bg-cover bg-no-repeat min-h-screen w-full mb-10">
      <div className="w-full bg-stone-400 h-[1px] mt-[90px]"></div>
      <div className="max-w-2xl mx-auto px-5 md:px-0 flex h-[70vh] flex-col gap-10 items-center justify-center text-center">
        <h1 className="text-white text-5xl lg:text-8xl font-semibold ">
          Make yourself <br /> at home
        </h1>
        <div className="flex flex-col gap-3 w-full">
          <div className="input_container relative">
            <Search size={20} className="absolute left-2 top-1/2 -translate-y-1/2" />
            <input
              placeholder="Seach Products"
              className="p-3 px-12 outline-none rounded-md w-full"
            />
          </div>
          <p className="text-sm text-white">You can ask about <a className="text-primaryColor" href="#">products</a>, <a className="text-primaryColor" href="#">Open Hours</a>, whatever you want</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
