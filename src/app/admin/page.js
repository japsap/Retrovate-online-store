"use client";

import React ,{useEffect} from "react";

import Link from "next/link";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import useFetch from "@hooks/useFetch";
import { ChevronDown, ChevronUp, Coins, Plus } from "lucide-react";

import {
  accountDashboardLinks,
  dashboardLinks,
  chartCardsData,
} from "@constants/Data";
import Border from "@components/ui/border";
import ChartCard from "@components/cards/ChartCard";

import { LineChart } from "@mui/x-charts/LineChart";
import { getSession, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";



const page = () => {
  const pathname = usePathname()
  const router = useRouter()

  const userId = JSON.parse(sessionStorage.getItem("userId")) || []
 
  const [ profile ] = useFetch(`/api/profile/${userId}`, []);

  useEffect(() => {
    const isAuthFunc = async () => {
      const session = await getSession()

      if(session === null){
        router.push('/')
      }
    }
    isAuthFunc()
  }, [])

  

  return (
    <div className="flex items-start justify-between gap-5">
      <div className="hidden lg:flex flex-col gap-7 lg:w-1/5 p-3 px-7">
        <DropdownMenu className="w-full">
          <DropdownMenuTrigger
            asChild
            className="border border-[#E4E4E7] dark:border-[#262626] p-1 w-max xl:w-full rounded-md cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  alt="user-pfp"
                  src={profile?.image}
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <div className="hidden xl:flex flex-col">
                  <h1 className="text-base font-bold">{profile?.firstName}</h1>
                  <p className="text-[12px]">Sofia, Bulgaria</p>
                </div>
              </div>
              <div className="flex-col items-center hidden xl:flex pr-2">
                <ChevronUp
                  className="text-stone-300"
                  strokeWidth={3}
                  size={18}
                />
                <ChevronDown
                  className="text-stone-300"
                  strokeWidth={3}
                  size={18}
                />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full">
            <h1>cicki</h1>
          </DropdownMenuContent>
        </DropdownMenu>

        <p className="uppercase text-sm">Main menu</p>

        <ul className="flex flex-col gap-5 text-stone-400">
          {dashboardLinks.map((link, id) => (
            <li
              className="flex items-center gap-5 animation hover:text-stone-600"
              key={id}
            >
              <i className={link.path === pathname ? "text-primaryColor" : ""}>
                {link.icon}
              </i>
              <Link
                className={
                  link.path === pathname
                    ? "font-semibold text-black dark:text-white text-lg"
                    : "" + "text-lg"
                }
                href={link.path}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <p className="uppercase text-sm">Account</p>

        <ul className="flex flex-col gap-5 text-stone-400">
          {accountDashboardLinks.map((link, id) => (
            <li
              className="flex items-center gap-5 animation hover:text-stone-600"
              key={id}
            >
              <i className={link.path === pathname ? "text-primaryColor" : ""}>
                {link.icon}
              </i>
              <Link
                className={
                  link.path === pathname
                    ? "font-semibold text-black text-lg"
                    : "" + "text-lg"
                }
                href={link.path}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full min-h-screen flex flex-col gap-5 p-3 px-10 pt-10">
        <div className="flex-between">
          <div className="flex flex-col w-full">
            <h1 className="text-4xl font-semibold">Dashboard</h1>
            <p className="text-lg">Monitor your monthly revenue here.</p>
          </div>
          <button className="w-full flex justify-end items-center gap-3 font-semibold">
            <Plus strokeWidth={2.5} className="text-primaryColor" />
            Add Widget
          </button>
        </div>
        <Border />

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {chartCardsData.map((chartCard, i) => (
            <ChartCard key={i} {...chartCard} />
          ))}
        </div>

        <div className="flex flex-col gap-3  border border-[#E4E4E7] dark:border-[#262626] p-3 rounded-lg">
          <div className="flex-between">
            <div className="flex items-center gap-3">
              <Coins size={30} className="text-stone-400" />
              <h1 className="text-3xl font-semibold">Sales Revenue</h1>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-3">
              <span className="w-7 h-2 rounded-xl bg-green-600" />
              <p className="w-full">Reccuring Revenue</p>
            </div>
            <span className="hidden lg:flex text-black dark:text-white font-semibold">
              Monthly
            </span>
          </div>

          <LineChart
            xAxis={[{ data: [50, 100, 150, 200, 250] }]}
            series={[
              {
                data: [50, 100, 125, 200, 250],
              },
            ]}
            sx={{
              "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                strokeWidth: "0.4",
                fill: "#a8a29e",
              },
              // change bottom label styles
              "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                strokeWidth: "0.5",
                fill: "#a8a29e",
              },
              // bottomAxis Line Styles
              "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                stroke: "white",
                strokeWidth: 0.4,
              },
              // leftAxis Line Styles
              "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                stroke: "white",
                strokeWidth: 0.4,
              },
              ".MuiLineElement-root": {
                stroke: '#22c55e',
                strokeWidth: 2,
              },
              ".MuiMarkElement-root": {
                stroke: "transparent",
                scale: "0.6",
                fill: "transparent",
                strokeWidth: 2,
              },
            }}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
