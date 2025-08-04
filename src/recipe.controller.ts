import { Body, Controller, Get } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeDTO } from './infra/dtos/recipe.dto';

@Controller("recipes")
export class RecipeController {
  constructor(private readonly _recipeService: RecipeService) { }

  @Get()
  async create(@Body() recipe: RecipeDTO): Promise<string> {
    return await this._recipeService.create(recipe);
  }
}
