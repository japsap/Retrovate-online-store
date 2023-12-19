"use client";

import { useToast } from "@components/ui/use-toast";
import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const { toast } = useToast()

  const router = useRouter();

  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  };

  const addItemToCart = async ({
    product,
    name,
    price,
    image,
    stock,
    seller,
    quantity = 1,
  }) => {
    const item = {
      product,
      name,
      price,
      image,
      stock,
      seller,
      quantity,
    };

    const isItemExist = cart?.cartItems?.find(
      (i) => i.product === item.product
    );

    let newCartItems;

    if (isItemExist) {
      newCartItems = cart?.cartItems?.map((i) =>
        i.product === isItemExist.product ? item : i
      );

      toast({
        variant: "destructive",
        title: "Error",
        description: "You have alrady added this item to your cart",
      });
    } else {
      newCartItems = [...(cart?.cartItems || []), item];
      toast({
        variant: "green",
        title: "Success!",
        description: "Successfully added this item to your cart",
      });
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const deleteItemFromCart = (id) => {
    const newCartItems = cart?.cartItems?.filter((i) => i.product !== id);

    if(window.confirm('Are you sure you want to delete this item?')){
      localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
      setCartToState();
      toast({
        variant: "green",
          title: "Success",
          description: "Successfully removed this item to your cart",
      })
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;