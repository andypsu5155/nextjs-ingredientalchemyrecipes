import { useAlchemyContext } from "@/context/alchemy-context";
import React from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Location } from "@/types/Location";

export default function AddIngredient({ location }: { location: Location }) {
  const { ingredients, setIngredients } = useAlchemyContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const ingredient = form.ingredient.value;
    const location = form.location.value;
    setIngredients([...ingredients, { name: ingredient, location }]);
    form.reset();
  };

  return (
    <div>
      <h1>Add an Ingredient:</h1>
      {location === "all" && (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <label>
            Ingredient:
            <Input
              type="text"
              name="ingredient"
              className="text-black"
              required={true}
            />
          </label>
          <label>
            Location:
            <Select name="location" required={true}>
              <SelectTrigger>
                <SelectValue placeholder="Select a location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pantry">Pantry</SelectItem>
                <SelectItem value="fridge">Fridge</SelectItem>
                <SelectItem value="freezer">Freezer</SelectItem>
              </SelectContent>
            </Select>
          </label>
          <Button type="submit">Add</Button>
        </form>
      )}
      {location === "pantry" && (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <label>
            Ingredient:
            <Input
              type="text"
              name="ingredient"
              className="text-black"
              required={true}
            />
          </label>
          <label>
            Location: Pantry
            <Select name="location" required={true} value="pantry">
              <SelectTrigger className="hidden">
                <SelectValue placeholder="Select a location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pantry">Pantry</SelectItem>
                <SelectItem value="fridge">Fridge</SelectItem>
                <SelectItem value="freezer">Freezer</SelectItem>
              </SelectContent>
            </Select>
          </label>
          <Button type="submit">Add</Button>
        </form>
      )}
      {location === "fridge" && (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <label>
            Ingredient:
            <Input
              type="text"
              name="ingredient"
              className="text-black"
              required={true}
            />
          </label>
          <label>
            Location: Fridge
            <Select name="location" required={true} value="fridge">
              <SelectTrigger className="hidden">
                <SelectValue placeholder="Select a location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pantry">Pantry</SelectItem>
                <SelectItem value="fridge">Fridge</SelectItem>
                <SelectItem value="freezer">Freezer</SelectItem>
              </SelectContent>
            </Select>
          </label>
          <Button type="submit">Add</Button>
        </form>
      )}
      {location === "spices" && (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <label>
            Ingredient:
            <Input
              type="text"
              name="ingredient"
              className="text-black"
              required={true}
            />
          </label>
          <label>
            Location: My Spice Collection
            <Select name="location" required={true} value="spices">
              <SelectTrigger className="hidden">
                <SelectValue placeholder="Select a location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pantry">Pantry</SelectItem>
                <SelectItem value="fridge">Fridge</SelectItem>
                <SelectItem value="spices">Spices</SelectItem>
              </SelectContent>
            </Select>
          </label>
          <Button type="submit">Add</Button>
        </form>
      )}
    </div>
  );
}
