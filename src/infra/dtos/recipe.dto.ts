import z from "zod";
import { createRecipeSchema } from "../schemas/create-recipe.schema";

export type RecipeDTO = z.infer<typeof createRecipeSchema>;