"use client";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { useState, useEffect } from "react";

import { getSession } from "next-auth/react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const isAuthFunc = async () => {
  const session = await getSession();

  if (session === null) return window.location.href = "/";

};