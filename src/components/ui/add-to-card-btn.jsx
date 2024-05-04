import React from "react";

import Image from "next/image";

const AddToCarTButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="addtocardbtn hidden relative lg:flex justify-center items-center bg-[#252525] w-full p-3 text-white rounded-md">
        <div className="absolute left-0 bg-primaryColor p-3 rounded-l-md">
            <Image src="/images/icons/white-cart-icon.png" width={25} height={25} />
        </div>
        Add to cart
    </button>
  );
};

export default AddToCarTButton;
