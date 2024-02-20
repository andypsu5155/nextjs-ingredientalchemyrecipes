"use client";

import { Button } from "@/components/ui/button";
import { useAlchemyContext } from "@/context/alchemy-context";
import React, { useEffect, useState } from "react";

export default function MyRecipes() {
  const { ingredients, recipes, setRecipes } = useAlchemyContext();
  const ingredientNames = ingredients.map((ingredient) => ingredient.name);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const messagePrompt =
    "All I have to cook with are these ingredients: (" +
    ingredientNames.join(", ") +
    ") generate a recipe that only uses the ingredients that are listed here. Do not include an ingredient if it is not listed." +
    "don't make any of these recipes again: " +
    recipes.map((recipe) => recipe.title).join(", ");
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "You are a personal chef's assistant. You have experience cooking for some of the top athletes around the world. You have a list of ingredients and you need to generate a recipe that can be prepared ONLY from the list of ingredients provided, then return it in JSON format {title: string, ingredients: string[], instructions: string[]}.",
    },
  ]);

  // `onSubmit` event handler fired when the user submits a new message
  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setMessages([...messages, { role: "user", content: messagePrompt }]);

    setLoadingStatus(true);
  };

  // Use `useEffect` to call `fetchReply` when `loadingStatus` changes
  useEffect(() => {
    if (loadingStatus) {
      fetchReply();
    }
  }, [loadingStatus]);

  // Function that calls the `/api/chat` endpoint and updates `messages`
  async function fetchReply() {
    try {
      // Try to fetch a `reply` from the endpoint and update `messages`
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages }),
      });

      const responseBody = await response.json();
      const reply =
        response.status === 200 ? responseBody.reply : responseBody.error.reply;
      const replyJSON = JSON.parse(reply.content);
      setRecipes([
        ...recipes,
        {
          title: replyJSON.title,
          ingredients: replyJSON.ingredients,
          instructions: replyJSON.instructions,
        },
      ]);
      setMessages([...messages, reply]);
    } catch {
      // Catch and handle any unexpected errors
      const reply = {
        role: "assistant",
        content: "An error has occured.",
      };

      setMessages([...messages, reply]);
    }
    // Set `setLoadingStatus` to false
    setLoadingStatus(false);
  }

  return (
    <div className="">
      <form onSubmit={onSubmit}>
        {loadingStatus === false ? (
          <Button type="submit" className="">
            Generate Recipe
          </Button>
        ) : (
          <button type="submit" className="" disabled>
            Generating Recipe...
          </button>
        )}
      </form>
      <h2 className="text-4xl font-bold">Recipes:</h2>
      <div className="flex flex-col">
        {recipes.map((recipe, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-2xl">{recipe.title}</h3>
            <p className="text-xl font-bold">Ingredients:</p>
            <ul className="pl-7 list-disc">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <h3 className="text-2xl">Instructions:</h3>
            <ol className="">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
