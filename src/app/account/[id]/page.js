"use client";

import { dropdownMenu } from "@constants/Data";
import { useSession } from "next-auth/react";
import React, { use, useEffect, useState } from "react";

import Link from "next/link";
import { Mail, User, Lock, BadgeCheck } from "lucide-react";

import { Button } from "@components/ui/button";
import { toast } from "@components/ui/use-toast";
import { isAuthFunc } from "@lib/utils";
import useRest from "@hooks/useRest";
import useFetch from "@hooks/useFetch";
import { useParams } from "next/navigation";
import { Skeleton } from "@mui/material";

const page = () => {
  const { data: session } = useSession("");
  const { updateUsername } = useRest();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [user, _, isLoading] = useFetch(`/api/profile/${id}`, []);

  useEffect(() => {
    isAuthFunc();

    setUserId(session?.user?.id);
  }, [session]);

  const onChangeName = (e) => {
    e.preventDefault();

    if (name.length < 2) {
      return toast({
        variant: "destructive",
        title: "Error!",
        description: "The given username has to be longer than 2 characters!",
      });
    }

    updateUsername(name, userId);
  };

  return (
    <main className="max-w-7xl mx-auto flex flex-col md:gap-14 md:px-10 xl:px-0 mt-5 lg:mt-20">
      <div className="flex flex-col lg:flex-row justify-between w-full py-5 px-5 md:px-0">
        <div className="w-full mb-10 lg:w-[500px] hidden lg:flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-3xl dark:text-white">
              {isLoading ? (
                <Skeleton className="w-1/3 h-10 bg-stone-300 dark:bg-[#191919]" />
              ) : (
                user.fullname
              )}
            </h1>
            <div className="flex items-center gap-3 w-full">
              <p className="text-stone-400 w-full" id="user_email">
                {isLoading ? (
                  <Skeleton className="w-2/3 h-10 bg-stone-300 dark:bg-[#191919]" />
                ) : (
                  user.email
                )}
              </p>
            </div>
          </div>
          <ul className="hidden flex-col gap-2 list-none lg:flex">
            {dropdownMenu.map((link, id) => (
              <li className="uppercase text-xl" key={id}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
            <li className="uppercase text-xl">
              <Link href={`${session?.user?.id}`}>Account</Link>
            </li>
            <li className="uppercase text-xl">
              <Link href={`/settings/${session?.user?.id}`}>Settings</Link>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-4 mb-5">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl dark:text-white">
              Account Settings
            </h1>
            <p className="text-stone-400"></p>
          </div>
          <div className="grid grid-cols-1 gap-5">
            <div className="main-border flex justify-between items-center gap-3 p-5 rounded-md">
              <div className="flex flex-col gap-2 w-full">
                <h1 className="text-xl font-bold dark:text-white mb-2">
                  Account Information
                </h1>
                <form
                  onSubmit={onChangeName}
                  className="relative flex-between w-full border-b dark:border-[#262626] border-stone-300 py-3"
                >
                  <User className="absolute left-0 text-stone-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="outline-none w-full px-10 bg-transparent placeholder:text-stone-400 text-stone-400"
                    placeholder={isLoading ? "loading..." : user.fullname}
                  />
                  <Button className="w-[200px]">Edit</Button>
                </form>
                <form className="relative flex-between w-full border-b dark:border-[#262626] border-stone-300 py-3">
                  <Mail className="absolute left-0 text-stone-400" />
                  <input
                    type="email"
                    className="outline-none w-full px-10 bg-transparent placeholder:text-stone-400 text-stone-400"
                    placeholder={isLoading ? "loading..." : user.email}
                  />
                  <Button variant="outline" className="w-[200px]">
                    Edit
                  </Button>
                </form>
                <form className="relative flex-between w-full border-b dark:border-[#262626] border-stone-300 py-3">
                  <Lock className="absolute left-0 text-stone-400" />
                  <input
                    type="password"
                    className="outline-none w-full px-10 bg-transparent placeholder:text-stone-400 text-stone-400"
                    placeholder="•••••••••••••••"
                  />
                  <Button variant="outline" className="w-[200px]">
                    Edit
                  </Button>
                </form>
              </div>
            </div>
            <div className="main-border flex justify-between items-center gap-3 p-5 rounded-md">
              <div className="flex flex-col gap-2 w-full">
                <h1 className="text-xl font-bold dark:text-white mb-2">
                  Google Connection
                </h1>
                {!session?.user ? (
                  <div className="flex flex-col gap-3">
                    <p className="text-sm">
                      You can sync your google account so there can be better
                      analytics for you.
                    </p>
                    <Button
                      variant="outline"
                      className="h-[60px] relative max-w-lg"
                    >
                      <img
                        src="images/Google.png"
                        className="absolute left-5"
                      />
                      Sign in with Google
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-sm">
                    <BadgeCheck className="text-green-600" />
                    <p>
                      You have successfully linked your google account to SHOP.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="main-border flex justify-between items-center gap-3 p-5 rounded-md">
              <div className="flex flex-col gap-2 w-full">
                <h1 className="text-xl font-bold dark:text-white mb-2">
                  Facebook Connection
                </h1>
                <div className="flex flex-col gap-3 text-sm text-blue-500">
                  <p>Your account is currently not linked.</p>
                  <p>Facebook: #1015750835264897</p>
                  <Link href="#">Copy your facebook ID</Link>
                  <Link href="#">
                    Remove your facebook connection with SHOP.
                  </Link>
                </div>
              </div>
            </div>
            <div className="main-border flex justify-between items-center gap-3 p-5 rounded-md">
              <div className="flex flex-col gap-2 w-full">
                <h1 className="text-xl font-bold dark:text-white mb-2">
                  Apple Connection
                </h1>
                <div className="flex flex-col gap-3">
                  <p className="text-sm">
                    You can sync your Apple account so there can be better
                    analytics for you.
                  </p>
                  <Button className="relative max-w-lg h-[60px]">
                    <img
                      src="/images/Apple.png"
                      className="h-[30px] w-[30px] absolute left-5"
                    />
                    Sign in with Apple
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
