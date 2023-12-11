import React from "react";

const IndexPageCard = ({ img, name }) => {
  return (
    <div className="relative">
      <img
        className="w-full lg:w-[300px] h-[200px] object-fill rounded-lg brightness-[0.65]"
        src={img}
        alt={name}
      />
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl">
        {name}
      </h1>
    </div>
  );
};

export default IndexPageCard;
