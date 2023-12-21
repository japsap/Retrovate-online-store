"use client";

import React, { useState } from "react";

import { Search } from "lucide-react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

const HeaderSection = () => {

  const formSchema = z.object({
    search: z
      .string()
      .min(4, {
        message: "Your search data must be higher than 4 symbols",
      })
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { search: "" },
  });

  function onSubmitSearch(data) {
   
  }

  return (
    <div className="bg-login-header bg-cover bg-no-repeat min-h-screen w-full mb-10">
      <div className="w-full bg-stone-400 h-[1px] mt-[80px]" id="linezz" />
      <div className="max-w-2xl mx-auto px-5 md:px-0 flex h-[70vh] flex-col gap-10 items-center justify-center text-center">
        <h1 className="text-white text-5xl lg:text-8xl font-semibold ">
          Make yourself <br /> at home
        </h1>
        <Form className="flex flex-col gap-3 w-full" {...form}>
          <form
            className="input_container relative w-full"
            onSubmit={form.handleSubmit(onSubmitSearch)}
          >
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl className>
                    <Input
                      {...field}
                      placeholder="Search Products"
                      className="focus-visible:ring-0 focus:border-none p-3 bg-white text-black placeholder:text-stone-400 border-none outline-none rounded-md w-full"
                    />
                  </FormControl>
                  <FormMessage className="absolute top-[100%] left-1/2 w-max text-red-600 -translate-x-1/2 bg-red-600/30 p-2 rounded-md" />
                </FormItem>
              )}
            />
            <button type="submit">
              <Search
                size={20}
                className="absolute  text-black right-2 top-[30%] -translate-y-1/2"
              />
            </button>
            <p className="text-sm text-white -mt-[15px]">
              You can ask about{" "}
              <a className="text-primaryColor" href="#">
                products
              </a>
              ,{" "}
              <a className="text-primaryColor" href="#">
                Open Hours
              </a>
              , whatever you want
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default HeaderSection;
