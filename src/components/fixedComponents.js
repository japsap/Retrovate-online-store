'use client'

import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex-start gap-3 cursor-pointer" onClick={() => window.location.href = '/'}>
      <Image width={50} height={50} src={"/images/logo.png"} alt="Logo Image" />
      <h3 className="hidden md:flex font-bold text-xl">Retrovate</h3>
    </div>
  );
};
