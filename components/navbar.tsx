import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/ingredient-alchemy-logo.png";

export default function NavBar() {
  return (
    <nav className="w-full bg-[#f7ede2] flex justify-between px-10">
      <Image src={logo} alt="Ingredient Alchemy Logo" className="w-[300px]" />
      <ul className="flex items-center justify-center gap-5 text-[#f6bd60] font-bold">
        <li className="h-full items-center justify-center">
          <Link
            href="/"
            className="flex h-full items-center justify-center hover:bg-[#f28482] transition-all px-5"
          >
            Home
          </Link>
        </li>
        <li className="h-full items-center justify-center">
          <Link
            href="/my-ingredients"
            className="flex h-full items-center justify-center hover:bg-[#f28482] transition-all px-5"
          >
            My Ingredients
          </Link>
        </li>
        <li className="h-full items-center justify-center">
          <Link
            href="/my-recipes"
            className="flex h-full items-center justify-center hover:bg-[#f28482] transition-all px-5"
          >
            My Recipes
          </Link>
        </li>
      </ul>
    </nav>
  );
}
