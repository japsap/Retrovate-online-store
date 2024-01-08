"use client";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { useState, useEffect } from "react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getItemsSearchedByUser = () => {
  const [items, setItems] = useState(
    // sessionStorage.getItem("items")
    //   ? JSON.parse(sessionStorage.getItem("items"))
    //   : [],
    []
  );

  useEffect(() => {
    // sessionStorage.setItem("items", JSON.stringify(items)) || [];

    let arrValues = items.map((item) => {
      return item._id;
    });

    let isDup = arrValues.some((item, index) => {
      return arrValues.indexOf(item) != index;
    });

    let JSONObject = items.map(JSON.stringify);
    let uniqueSet = new Set(JSONObject);
    let uniqueArr = Array.from(uniqueSet).map(JSON.parse);

    if (isDup) {
      return setItems(uniqueArr);
    }
  }, [items]);

  const getItemsPickedByUser = (item) => {
    setItems([...items, item]);
  };

  return {
    getItemsPickedByUser,
  };
};
