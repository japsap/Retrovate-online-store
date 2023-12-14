"use client";

import Image from "next/image";
import { getProviders, signIn, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";

const LoginPage = () => {
  const [providers, setProviders] = useState();
  const [toggleForm, setToggleForm] = useState(false);

  const formSchema = z.object({
    username: z.string().min(3, {
      message: "Username must be atleast 3 characters",
    }),
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email.")
      .refine((e) => e === "abcd@fg.com", "This email is not in our database"),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const setUpProviderts = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setUpProviderts();
  }, []);

  const onSubmitRegister = (e) => {
    e.preventDefault();
  };
  const onSubmitLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex-between">
      <div className="w-full">
        <Form {...form}>
          <form
            onSubmit={
              toggleForm
                ? form.handleSubmit(onSubmitRegister)
                : form.handleSubmit(onSubmitLogin)
            }
            className="space-y-5 w-full  max-w-2xl mx-auto p-10"
          >
            <div className="flex-start gap-3">
              <Image
                src="/images/logo.png"
                width={45}
                height={45}
                alt="logo image"
              />
              <h1 className="text-xl lg:text-4xl font-bold">retrovert.</h1>
            </div>

            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <button
                    onClick={() =>
                      signIn(provider.id, { callbackUrl: "/" })
                    }
                    key={provider.id}
                    className="flex-center gap-3 dark:text-white dark:border-white text-black border-2 border-black p-2 w-full rounded-lg "
                  >
                    <Image
                      src={`/images/${provider.name}.png`}
                      width={25}
                      height={25}
                      alt="image"
                    />
                    {toggleForm ? "Login" : "Register"} with Google
                  </button>
                );
              })}

            <div className="flex-center gap-3">
              <span className="h-[1px] w-full bg-stone-400 dark:bg-[#262626]" />
              <span className="text-stone-400">OR</span>
              <span className="h-[1px] w-full bg-stone-400 dark:bg-[#262626]" />
            </div>

            {!toggleForm && (
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Username"
                        className="login-input"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      className="login-input"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Password"
                      className="login-input"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex-between text-sm lg:text-base">
              <div className="flex-center gap-3">
                <input type="checkbox" />
                <p>Remeber me</p>
              </div>
              <a href="#" className="text-primaryColor">
                Forgot Password?
              </a>
            </div>
            <Button
              type="submit"
              className="w-full dark:bg-transparent rounded-lg py-6 dark:text-white border-2 dark: border-white text-base bg-black hover:bg-black/80"
            >
              {toggleForm ? "Login" : "Register"}
            </Button>

            <p onClick={() => setToggleForm((prev) => !prev)}>
              {toggleForm ? "Not registered yet?" : "Having an account?"}{" "}
              <span className="text-primaryColor cursor-pointer">
                {toggleForm ? "Create account" : "Enter account"}
              </span>
            </p>
          </form>
        </Form>
      </div>
      <div className="w-full bg-login-image bg-center min-h-screen hidden lg:flex items-center justify-center">
        <div className="column gap-5 text-left max-w-sm">
          <h1 className="text-4xl font-bold text-white">
            Welcome to our online store Retrovert
          </h1>
          <p className="text-stone-400">
            Please craete an account to access all our products
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
