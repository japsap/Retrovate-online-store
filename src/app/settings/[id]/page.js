"use client";

import React, { useEffect } from "react";

import { Skeleton } from "@components/ui/skeleton";

import Link from "next/link";
import useFetch from "@hooks/useFetch";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";

import { dropdownMenu, langugagesArray } from "@constants/Data";
import { isAuthFunc } from "@lib/utils";

import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem
} from "@components/ui/dropdown-menu";

import "../../../../node_modules/flag-icons/css/flag-icons.min.css";
import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

const page = () => {
  const { id } = useParams();
  const { theme, setTheme } = useTheme()
  const { data: session } = useSession();

  console.log(theme);

  const [user, _, isLoading] = useFetch(`/api/profile/${id}`, {});

  useEffect(() => {
    isAuthFunc();
  }, []);

  return (
    <main className="max-w-7xl mx-auto flex flex-col md:gap-14 md:px-10 xl:px-0 mt-5 lg:mt-20">
      <div className="flex flex-col lg:flex-row justify-between w-full py-5 px-5 md:px-0">
        <div className="w-full mb-10 lg:w-[500px] hidden lg:flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-3xl dark:text-white">
              {isLoading ? (
                <Skeleton className="w-1/3 h-10 bg-stone-300 dark:bg-[#191919]" />
              ) : (
                user?.fullname
              )}
            </h1>
            <div className="flex items-center gap-3 w-full">
              <p className="text-stone-400 w-full" id="user_email">
                {isLoading ? (
                  <Skeleton className="w-2/3 h-10 bg-stone-300 dark:bg-[#191919]" />
                ) : (
                  user?.email
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
              <Link href={`/account/${session?.user?.id}`}>Account</Link>
            </li>
            <li className="uppercase text-xl">
              <Link href={`${session?.user?.id}`}>Settings</Link>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-4 mb-5">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl dark:text-white">
              Account Settings
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-5">
            <div className="flex flex-col justify-between  gap-3 p-5 rounded-md main-border">
              <h1 className="text-xl font-bold dark:text-white mb-2">
                Theme Preference{" "}
                <span className="text-stone-400 text-sm font-light">
                  (system)
                </span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={() => setTheme('light')} variant={theme === 'light' ? '' : 'outline' }>Light</Button>
                <Button onClick={() => setTheme('dark')} variant={theme == 'dark' ? '' : 'outline' }>Dark</Button>
                <Button onClick={() => setTheme('system')} variant={theme === 'system' ? '' : 'outline' }>System</Button>
              </div>
            </div>
            <div className="flex flex-col justify-between  gap-3 p-5 rounded-md main-border">
              <h1 className="text-xl font-bold dark:text-white mb-2">
                Language{" "}
                <span className="text-stone-400 text-sm font-light">
                  (english)
                  <img />
                </span>
              </h1>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="relative flex items-center gap-3 w-full lg:w-[200px]"
                    variant="outline"
                  >
                    <div className="flex items-center gap-3">
                      English
                      <span className="w-[100px] object-fit h-[30px] fi fi-gb" />
                      <ChevronDown className="absolute text-stone-400 right-5" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='lg:w-[200px]'>
                  <DropdownMenuLabel>Languages</DropdownMenuLabel>
                  <DropdownMenuSeparator/>
                  {langugagesArray.map((link, id) => (
                    <DropdownMenuItem className="flex items-center gap-3 cursor-pointer" key={id}>
                      <span>{link.language}</span>
                      <span className={`w-[100px] object-fit h-[30px] fi fi-${link.name}`}></span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
