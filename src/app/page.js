"use client";

import { useEffect } from "react";

import LandingPage from "@routes/LandingPage";
import CatalogPage from "@routes/CatalogPage";

import { getSession, useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();

  // useEffect(() => {
  //   const getSess = async () => {
  //     const sess = await getSession();
  //     if (sess != null) {
  //       sessionStorage.setItem("userId", JSON.stringify(session?.user?.id));
  //     }
  //   };
  //   getSess();
  // }, []);

  return <> {session ? <CatalogPage /> : <LandingPage />}</>;
};

export default page;
