"use client";

import AddIngredient from "@/components/addIngredient";
import { Button } from "@/components/ui/button";
import { useAlchemyContext } from "@/context/alchemy-context";
import React, { useState } from "react";
import { Location } from "@/types/Location";
import { X } from "lucide-react";

export default function MyIngredients() {
  const [location, setLocation] = useState<Location>("all");
  const { ingredients, setIngredients } = useAlchemyContext();

  const buttonClassName = "px-10 rounded-xl hover:bg-red-300";
  const buttonActiveClassName = buttonClassName + " bg-red-500";

  function deleteIngredient(name: string) {
    setIngredients(
      ingredients.filter((ingredient) => ingredient.name !== name)
    );
  }

  return (
    <>
      <div className="w-full flex gap-5 items-center justify-center mb-5">
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-5 text-2xl">
          <li>
            <Button
              className={
                location === "all" ? buttonActiveClassName : buttonClassName
              }
              onClick={() => setLocation("all")}
            >
              All
            </Button>
          </li>
          <li>
            <Button
              className={
                location === "pantry" ? buttonActiveClassName : buttonClassName
              }
              onClick={() => setLocation("pantry")}
            >
              Pantry
            </Button>
          </li>
          <li>
            <Button
              className={
                location === "fridge" ? buttonActiveClassName : buttonClassName
              }
              onClick={() => setLocation("fridge")}
            >
              Fridge
            </Button>
          </li>
          <li>
            <Button
              className={
                location === "spices" ? buttonActiveClassName : buttonClassName
              }
              onClick={() => setLocation("spices")}
            >
              Spices
            </Button>
          </li>
        </ul>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <AddIngredient location={location} />
        </div>
        <div>
          {location === "all" && (
            <>
              <h1>All Ingredients:</h1>
              <ul className="">
                {ingredients
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((ingredient) => (
                    <li
                      key={ingredient.name}
                      className="flex w-full xl:w-[50%] justify-between mb-2 border-black border-b-2 py-1"
                    >
                      {ingredient.name}{" "}
                      <Button
                        onClick={() => deleteIngredient(ingredient.name)}
                        className="h-6 w-6 p-0"
                      >
                        <X />
                      </Button>
                    </li>
                  ))}
              </ul>
            </>
          )}
          {location === "pantry" && (
            <>
              <h1>Ingredients in Pantry:</h1>
              <ul className="">
                {ingredients
                  .filter((ingredient) => ingredient.location === "pantry")
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((ingredient) => (
                    <li
                      key={ingredient.name}
                      className="flex w-full xl:w-[50%] justify-between mb-2 border-black border-b-2 py-1"
                    >
                      {ingredient.name}
                      <Button
                        onClick={() => deleteIngredient(ingredient.name)}
                        className="h-6 w-6 p-0"
                      >
                        <X />
                      </Button>
                    </li>
                  ))}
              </ul>
            </>
          )}
          {location === "fridge" && (
            <>
              <h1>Ingredients in Fridge:</h1>
              <ul className="">
                {ingredients
                  .filter((ingredient) => ingredient.location === "fridge")
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((ingredient) => (
                    <li
                      key={ingredient.name}
                      className="flex w-full xl:w-[50%] justify-between mb-2 border-black border-b-2 py-1"
                    >
                      {ingredient.name}
                      <Button
                        onClick={() => deleteIngredient(ingredient.name)}
                        className="h-6 w-6 p-0"
                      >
                        <X />
                      </Button>
                    </li>
                  ))}
              </ul>
            </>
          )}
          {location === "spices" && (
            <>
              <h1>My Spice Collection:</h1>
              <ul className="">
                {ingredients
                  .filter((ingredient) => ingredient.location === "spices")
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((ingredient) => (
                    <li
                      key={ingredient.name}
                      className="flex w-full xl:w-[50%] justify-between mb-2 border-black border-b-2 py-1"
                    >
                      {ingredient.name}
                      <Button
                        onClick={() => deleteIngredient(ingredient.name)}
                        className="h-6 w-6 p-0"
                      >
                        <X />
                      </Button>
                    </li>
                  ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
}
