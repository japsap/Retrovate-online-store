import React from "react";


const FooterComponent = () => {
  return (
    <footer className="w-full dark:bg-white bg-[#18181B] mt-[100px]">
      <div className="p-10 flex  gap-5 flex-col lg:flex-row items-baseline justify-around ">
        <div className="flex flex-col gap-3 max-w-[350px]">
          <h1 className="text-2xl font-bold text-white dark:text-black">
            SHOP.
          </h1>
          <p className="text-stone-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, illum.
          </p>
        </div>
        <div className="flex flex-col gap-5 text-white dark:text-black">
          <h1 className="font-semibold text-xl text-white dark:text-black">
            Pages
          </h1>
          <ul>
            <li>Products</li>
            <li>Collections</li>
            <li>About</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 text-white dark:text-black">
          <h1 className="font-semibold text-xl text-white dark:text-black">
            Company
          </h1>
          <ul>
            <li>Privacy polcy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 text-white dark:text-black">
          <h1 className="font-semibold text-xl text-white dark:text-black">
            Social
          </h1>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Pinterest</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className="gradient-line" />
      <p className="text-stone-400 py-5 text-center">
        © SHOP. Inc. All right reserved
      </p>
    </footer>
  );
};

export default FooterComponent;
