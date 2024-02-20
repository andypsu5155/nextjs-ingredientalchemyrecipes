type IngredientLocation = "fridge" | "pantry" | "spices";

export type Ingredient = {
  name: string;
  location: IngredientLocation;
};
