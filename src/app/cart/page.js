"use client";

import CartItemsCard from "@components/cards/CartItemsCard";
import { LoggedNavbar } from "@components/NavbarComponents";
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  FormField,
  FormDescription,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { HelpCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { promoCodes } from "@constants/Data";
import { useToast } from "@components/ui/use-toast";
import { useContext, useState } from "react";
import CartContext from "@Context/CartContext";

const page = () => {
  const { toast } = useToast();

  const { cart } = useContext(CartContext);

  const [promocode, setPromocode] = useState(0);

  const formSchema = z.object({
    promoCode: z.string().min(4, { message: "Promo code invalid" }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      promoCode: "",
    },
  });

  const submitPromoCode = (data) => {
    if (promoCodes.includes(data.promoCode)) {
      setPromocode(50);
      toast({
        variant: "green",
        title: "Discount Granted",
        description: "You have successfully received a discount!",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Wrong promo code",
        description: "QJ pishki",
      });
    }
  };

  const fullPrice = cart?.cartItems?.reduce(
    (acc, data) => acc + data.price * 1,
    0,
  );
  const taxes = 0.01 * fullPrice;
  
  return (
    <div className="px-5 max-w-[105rem] mx-auto flex flex-col gap-10">
      <LoggedNavbar bgColor={true} />
      <div className="flex flex-col lg:flex-row  gap-10 justify-between">
        <div className="flex flex-col gap-3 w-full">
          <h1 className="font-bold text-4xl">Your Product List</h1>
          <div className="lg:h-[54vh] flex flex-col gap-3 lg:overflow-y-scroll w-full px-1">
            {cart?.cartItems?.length === 0 ? (
              <div className="flex justify-center min-h-[50vh] items-center gap-3">
                <h1 className="text-2xl font-bold">Empty Cart</h1>
              </div>
            ) : (
              cart?.cartItems?.map((cart) => <CartItemsCard {...cart} />)
            )}
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full mb-5">
          <h1 className="font-bold text-4xl mb">Detail Summary</h1>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Subtotal Product</h1>
              <h1 className="font-bold text-xl">
                ${fullPrice}
              </h1>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Price Delivery</h1>
              <h1 className="font-bold text-xl">Free</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Taxes</h1>
              <h1 className="font-bold text-xl">${taxes.toFixed(2)}</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="flex items-center gap-3 font-bold text-xl">
                Total Promo{" "}
                <HelpCircle className="text-stone-400 cursor-pointer" />
              </h1>
              <h1 className="font-bold text-xl">
                ${Number(promocode).toFixed(2)}
              </h1>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl">Total</h1>
            <h1 className="font-bold text-xl">
              ${Number(fullPrice + taxes).toFixed(2)}
            </h1>
          </div>
          <button className="py-3 rounded-lg text-white bg-black border border-black dark:text-black dark:bg-white border-none dark:font-bold">
            Check Out
          </button>

          <Form {...form}>
            <form
              className="flex flex-col gap-3"
              onSubmit={form.handleSubmit(submitPromoCode)}
            >
              <FormField
                control={form.control}
                name="promoCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-xl">
                      PromoCode
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your promo code ..."
                        className="login-input placeholder:text-stone-400 outline-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-stone-400">
                      Hint "promocode".
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white bg-black border border-black dark:text-black dark:bg-white border-none dark:font-bold"
              >
                Use promocode
              </button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default page;
