import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "@/sanity/schemas";

const config = defineConfig({
  projectId: "uyc4hsc7",

  dataset: "production",

  title: "Ingredient Alchemy Recipes Sanity",

  apiVersion: "2024-02-19",

  basePath: "/admin",

  plugins: [structureTool()],

  schema: { types: schemas },
});

export default config;
