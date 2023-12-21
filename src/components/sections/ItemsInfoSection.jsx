import { Play } from "lucide-react";
import React from "react";

const ItemsInfoSection = () => {
  return (
    <div className="flex-between flex-col md:flex-row my-5">
      <div className="flex flex-col gap-5 md:w-[50%]">
        <p>Learn more</p>
        <h1 className="text-2xl lg:text-4xl font-bold ">Complete Your Perfect Set</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          exercitationem maiores saepe adipisci debitis molestiae omnis tempore
          deserunt numquam soluta?
        </p>
        <button className="flex font-bold items-center bg-transparent text-black dark:text-stone-400 gap-3">
            <div className="flex items-center justify-center bg-primaryColor rounded-full p-2">
                <Play size={15} className=""/>
            </div>
            Collect Video
        </button>
      </div>
      <div className="relative flex justify-center items-center h-auto w-full overflow-hidden">
      <div class="shadow-2xl z-[-1] absolute h-[200px] w-[350px] bg-primaryColor rounded-bl-full rounded-br-full "></div>
        <img className="w-[calc(100%-10%)] mt-[150px] h-auto" src="/images/sofas/table.png"/>
      </div>
    </div>
  );
};

export default ItemsInfoSection;
