import { Injectable } from '@nestjs/common';
import { RecipeRepositoryDynamoDB } from './infra/aws/database/recipe.repository';
import { RecipeDTO } from './infra/dtos/recipe.dto';
import { createRecipeSchema } from './infra/schemas/create-recipe.schema';

@Injectable()
export class RecipeService {
  constructor(private readonly _recipeRepository: RecipeRepositoryDynamoDB) { }
  async create(recipe: RecipeDTO): Promise<string> {


    const result = createRecipeSchema.safeParse(recipe);


    //dps criar uma abstração de validaçáo para fazer inversão de dependências
    if (!result.success) {
      throw new Error("Invalid recipe format");
    }

    //criar um mapper para converter dto para entity e injetar no método de criar
    await this._recipeRepository.create(recipe);

    return 'Hello World!';
  }
}
