import React, { useState, useEffect } from "react";

import { signIn, getProviders } from "next-auth/react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "./dialog";

import { Button } from "./button";

import Image from "next/image";
import Link from "next/link";

const DialogModal = () => {

    const [providers, setProviders] = useState(null);

  
    useEffect(() => {
      const setUpProviders = async () => {
        const response = await getProviders();
  
        setProviders(response);
      };
  
      setUpProviders();
    }, []);
    
  return (
    <div className="flex items-center gap-3">
      <Button variant='outline'><Link href='#learn-more'>Learn More</Link></Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Sign in</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="items-center text-xl text-center font-bold">
            <h1>Create an Account</h1>
          </DialogHeader>

          <div className="flex justify-center gap-5">
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <button
                    onClick={() => signIn(provider.id)}
                    key={provider.id}
                    className="rounded-full border p-2 border-[#D6D9DC] dark:bg-[#252525] "
                  >
                    <Image
                      src={`/images/${provider.name}.png`}
                      width={25}
                      height={25}
                      alt="image"
                    />
                  </button>
                );
              })}
          </div>

          <div className="flex gap-3 justify-between items-center">
            <span className="dark:bg-[#252525] bg-[#D6D9DC] w-full h-[0.5px]"></span>
            <p className="text-[10px]">OR</p>
            <span className="dark:bg-[#252525] bg-[#D6D9DC] w-full h-[1px]"></span>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogModal;
