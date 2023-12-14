import React from "react";

const ImagesSection = () => {
  return (
    <div className="flex-between flex-col md:flex-row">
      <div className="relative bg-image-section-1 min-h-[70vh] w-full">
        <div className="absolute bottom-3 left-3 flex-col gap-5 items-end">
          <p className="text-white text-sm">245 products</p>
          <h1 className="font-bold text-5xl text-white">Bedroom</h1>
        </div>
      </div>
      <div className="relative bg-image-section-2 bg-cover bg-center bg-no-repeat min-h-[70vh] w-full">
        <div className="absolute bottom-3 left-3 flex-col gap-5 items-end">
          <p className="text-white text-sm">245 products</p>
          <h1 className="font-bold text-5xl text-white">Office</h1>
        </div>
      </div>
      <div className="relative bg-image-section-3 bg-center min-h-[70vh] w-full">
        <div className="absolute bottom-3 left-3 flex-col gap-5 items-end">
          <p className="text-white text-sm">245 products</p>
          <h1 className="font-bold text-5xl text-white">Kitchen</h1>
        </div>
      </div>
    </div>
  );
};

export default ImagesSection;
