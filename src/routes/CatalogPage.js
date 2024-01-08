import ItemsCard from "@components/cards/ItemsCard";
import { CatalogSwiper } from "@components/fixedComponents";
import { LoggedNavbar } from "@components/NavbarComponents";
import { Separator } from "@components/ui/separator";

import useFetch from "@hooks/useFetch";
import { Skeleton } from "@components/ui/skeleton";
import { Grip, LayoutGridIcon, ListFilter, Trash } from "lucide-react";
import React, { useState } from "react";
import { useToast } from "@components/ui/use-toast";

const CatalogPage = () => {

  const { toast } = useToast()

  const [priceRange, setPriceRange] = useState(0);
  const [cols, setCols] = useState(3);

  const [c, _, __] = useFetch("/api/catalog", []);
  const [catalog, setCatalog, isLoading] = useFetch("/api/catalog", []);

  const filterCatalog = () => {
    const filteredProducts = catalog.filter((c) => {
      return c.price > parseInt(priceRange, 10);
    });

    toast({
      title: "Success!",
      description: "Successfully filtered the items on your feed!",
    })

    setCatalog(filteredProducts);
  };

  return (
    <div>
      <LoggedNavbar bgColor={true} />
      <div className="max-w-[95em] mx-auto flex justify-center items-start gap-5 mt-5 md:px-5">
        <form className="sticky top-24 hidden flex-col gap-5 md:w-1/3 lg:flex">
          {/* first inputs */}
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold">Delivery Type</h1>
            <div className="flex items-center gap-3">
              <input type="checkbox" disabled={true} />
              <p className="flex items-center gap-3">
                Fast Delivery{" "}
                <span className="text-stone-300">(not working)</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" disabled={true} />
              <p className="flex items-center gap-3">
                Only Sale <span className="text-stone-300">(not working)</span>
              </p>
            </div>
          </div>
          {/* first inputs */}

          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold">Price</h1>
            <input
              className="w-2/3 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              type="range"
              onInput={(e) => setPriceRange(e.target.value * 24)}
            />
            <p className="text-sm">Price: {priceRange}$ - 2400$</p>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold">Category</h1>
            <div className="flex items-center gap-3">
              <input type="checkbox" />
              <p>Sofas</p>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" />
              <p>Chairs</p>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" disabled={true} />
              <p className="flex items-center gap-3">
                Tables <span className="text-stone-300">(not working)</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" disabled={true} />
              <p className="flex items-center gap-3">
                Beds <span className="text-stone-300">(not working)</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" disabled={true} />
              <p className="flex items-center gap-3">
                Shelfs <span className="text-stone-300">(not working)</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={filterCatalog}
              className="fill-btn flex items-center gap-3"
            >
              Filter <ListFilter size={16} />
            </button>
              <button
                type="button"
                onClick={() => setCatalog(c)}
                className="outline-btn flex items-center gap-3"
              >
                Clear Filters <Trash size={16} />
              </button>
          </div>
        </form>

        <div className="flex flex-col w-full p-5 lg:p-0 overflow-hidden">
          {/* swiper content */}
          <CatalogSwiper />
          {/* swiper content */}

          {/* pc version */}
          <div className="hidden md:flex justify-between items-center mt-5 ">
            <p className="text-sm">{catalog?.length} results found</p>
            <div className="flex h-5 items-center space-x-4 text-sm">
              <p className="hover:text-primaryColor cursor-pointer">View</p>
              <p className="hover:text-primaryColor cursor-pointer">9</p>
              <Separator orientation="vertical" />
              <p className="hover:text-primaryColor cursor-pointer">18</p>
              <Separator orientation="vertical" />
              <p className="hover:text-primaryColor cursor-pointer">32</p>
              <Separator orientation="vertical" />
              <p className="text-stone-300">(not working)</p>
            </div>

            <div className="flex items-center gap-3 text-stone-400">
              <LayoutGridIcon
                className="hover:text-primaryColor cursor-pointer"
                onClick={() => setCols(2)}
              />
              <Grip
                className="hover:text-primaryColor cursor-pointer"
                onClick={() => setCols(3)}
              />
            </div>
          </div>
          {/* pc version */}

          {/* mobile version */}
          <div className="flex justify-between items-center md:hidden">
            <p>{catalog?.length} results found</p>
            <button className="fill-btn-max-width flex items-center gap-3">
              Filter <ListFilter />
            </button>
          </div>
          {/* mobile version */}

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5`}
          >
            {isLoading
              ? [1, 2, 3].map((_, i) => (
                  <Skeleton
                    key={i}
                    className="bg-stone-300 dark:bg-[#191919] h-[350px] w-full"
                  />
                ))
              : catalog.map((item, i) => (
                  <ItemsCard swiperItem={item} key={i} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
