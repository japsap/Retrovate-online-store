'use client'

import Catalog from "@routes/Catalog";
import LandingPage from "@routes/LandingPage";
import { useSession } from "next-auth/react";
import React from "react";

const page = () => {

  const { data: session } = useSession();

  return (
    <>
      {session ? <Catalog/> : <LandingPage/>}
    </>
  );
};

export default page;
