"use client";

import CartItemsCard from "@components/cards/CartItemsCard";
import { LoggedNavbar } from "@components/NavbarComponents";
import {
  Form,
  FormControl,
  FormDescription,
  FormLabel,
  FormItem,
  FormMessage,
  FormField,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { HelpCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const page = () => {
  const formSchema = z.object({
    promoCode: z.string().min(4, { message: "Promo code invalid" }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      promoCode: "",
    },
  });

  const submitPromoCode = (data) => {};

  return (
    <div className="px-5 max-w-[105rem] mx-auto flex flex-col gap-10">
      <LoggedNavbar bgColor={true} />
      <div className="flex flex-col lg:flex-row  gap-10 justify-between">
        <div className="flex flex-col gap-3 w-full">
          <h1 className="font-bold text-4xl">Your Product List</h1>
          <div className="lg:h-[54vh] flex flex-col gap-3 lg:overflow-y-scroll w-full px-1">
            <CartItemsCard />
            <CartItemsCard />
            <CartItemsCard />
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full mb-5">
          <h1 className="font-bold text-4xl mb">Detail Summary</h1>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Subtotal Product</h1>
              <h1 className="font-bold text-xl">$1,017.00</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Price Delivery</h1>
              <h1 className="font-bold text-xl">Free</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Taxes</h1>
              <h1 className="font-bold text-xl">$5.00</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="flex items-center gap-3 font-bold text-xl">
                Total Promo{" "}
                <HelpCircle className="text-stone-400 cursor-pointer" />
              </h1>
              <h1 className="font-bold text-xl">$18.00</h1>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl">Total</h1>
            <h1 className="font-bold text-xl">$1,017.00</h1>
          </div>
          <button className="bg-transparent py-3 rounded-lg text-black border-2 border-black font-bold">
            Check Out
          </button>


          <Form {...form}>
            <form onSubmit={form.handleSubmit(submitPromoCode)}>
               <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-xl">PromoCode</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your promo code ..."
                      className="login-input placeholder:text-stone-400 outline-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default page;
