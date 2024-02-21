"use client";

import { Ingredient } from "@/types/Ingredient";
import React, { useContext, createContext, useState } from "react";
import { Recipe } from "@/types/Recipe";

type AlchemyContextType = {
  ingredients: Ingredient[];
  recipes: Recipe[];
  setIngredients: (ingredients: Ingredient[]) => void;
  setRecipes: (recipes: Recipe[]) => void;
};

// Step 1: Create a new context
const AlchemyContext = createContext<AlchemyContextType>({
  ingredients: [],
  recipes: [],
  setIngredients: () => {},
  setRecipes: () => {},
});

// Step 2: Create a context provider component
export function AlchemyProvider({ children }: { children: React.ReactNode }) {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  /*
  { name: "flour", location: "pantry" },
    { name: "sugar", location: "pantry" },
    { name: "butter", location: "fridge" },
    { name: "eggs", location: "fridge" },
    { name: "vanilla", location: "spices" },
    { name: "rice", location: "pantry" },
    { name: "pasta", location: "pantry" },
    { name: "salt", location: "pantry" },
    { name: "pepper", location: "pantry" },
    { name: "olive oil", location: "pantry" },
    { name: "garlic", location: "pantry" },
    { name: "onion", location: "pantry" },
    { name: "milk", location: "fridge" },
    { name: "cheese", location: "fridge" },
    { name: "chicken", location: "fridge" },
    { name: "beef", location: "fridge" },
    { name: "fish", location: "fridge" },
    { name: "potatoes", location: "pantry" },
    { name: "carrots", location: "pantry" },
    { name: "bell peppers", location: "pantry" },
    { name: "broccoli", location: "fridge" },
    { name: "spinach", location: "fridge" },
    { name: "lemon", location: "fridge" },
    { name: "soy sauce", location: "pantry" },
    { name: "vinegar", location: "pantry" },
    { name: "herbs", location: "spices" },
    { name: "cumin", location: "spices" },
    { name: "paprika", location: "spices" },
    { name: "cinnamon", location: "spices" },
    { name: "ginger", location: "spices" },
    { name: "mustard", location: "spices" },
    { name: "nutmeg", location: "spices" },
    { name: "coriander", location: "spices" },
    { name: "thyme", location: "spices" },
    { name: "oregano", location: "spices" },
    { name: "basil", location: "spices" },
    { name: "parsley", location: "spices" },
    { name: "rosemary", location: "spices" },
    { name: "dill", location: "spices" },
    { name: "turmeric", location: "spices" },
    { name: "bay leaf", location: "spices" },
    { name: "chili powder", location: "spices" },
    { name: "cayenne pepper", location: "spices" },
    { name: "garlic powder", location: "spices" },
    { name: "onion powder", location: "spices" },
    { name: "ground cloves", location: "spices" },
  */
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  return (
    <AlchemyContext.Provider
      value={{
        ingredients,
        recipes,
        setIngredients,
        setRecipes,
      }}
    >
      {children}
    </AlchemyContext.Provider>
  );
}

export function useAlchemyContext() {
  return useContext(AlchemyContext);
}
