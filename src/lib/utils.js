'use client'

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { useState, useEffect } from "react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getItemsSearchedByUser = () => { 
  // const itemsPickedByUser = JSON.parse(sessionStorage.getItem("items")) || [];
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    // const item = JSON.parse(sessionStorage.setItem('items')) || []

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
