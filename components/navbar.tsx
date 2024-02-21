"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/public/ingredient-alchemy-logo.png";
import { AlignJustify } from "lucide-react";
import { Button } from "./ui/button";

export default function NavBar() {
  const [isOpened, setIsOpened] = useState(false);
  const [width, setWidth] = useState(0);
  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
    if (newWidth > 768) setIsOpened(false);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  return (
    <nav className="relative w-full bg-[#f7ede2] flex flex-col items-center rounded-b-2xl md:rounded-b-none">
      <div className="h-[150px] w-full flex justify-between items-center px-3 sm:px-10">
        <Image
          src={logo}
          alt="Ingredient Alchemy Logo"
          className="w-[200px] sm:w-[300px]"
        />
        <Button
          className="md:hidden bg-transparent text-black hover:bg-yellow-50"
          onClick={() => setIsOpened(!isOpened)}
        >
          <AlignJustify />
        </Button>
        <ul className="hidden md:flex h-full items-center justify-center gap-5 text-[#f6bd60] font-bold">
          <li className="flex h-full items-center justify-center">
            <Link
              href="/"
              className="flex h-full items-center justify-center hover:bg-yellow-100 transition-all px-5"
            >
              Home
            </Link>
          </li>
          <li className="h-full items-center justify-center">
            <Link
              href="/my-ingredients"
              className="flex h-full items-center justify-center hover:bg-yellow-100 transition-all px-5"
            >
              My Ingredients
            </Link>
          </li>
          <li className="h-full items-center justify-center">
            <Link
              href="/my-recipes"
              className="flex h-full items-center justify-center hover:bg-yellow-100 transition-all px-5"
            >
              My Recipes
            </Link>
          </li>
        </ul>
      </div>
      {isOpened && (
        <ul className="w-full flex flex-col text-[#f6bd60] font-bold  rounded-b-2xl bg-[#f1e1d0]">
          <li className="w-full">
            <Link
              href="/"
              className="flex w-full items-center justify-center hover:bg-yellow-100 py-3"
            >
              Home
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/my-ingredients"
              className="flex w-full items-center justify-center hover:bg-yellow-100 py-3"
            >
              My Ingredients
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/my-recipes"
              className="flex w-full items-center justify-center hover:bg-yellow-100 py-3 rounded-b-2xl"
            >
              My Recipes
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
