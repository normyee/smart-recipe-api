import { Module } from '@nestjs/common';
import { RecipeRepositoryDynamoDB } from './infra/aws/database/recipe.repository';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';

@Module({
  imports: [],
  controllers: [RecipeController],
  providers: [RecipeService, RecipeRepositoryDynamoDB],
})
export class AppModule { }
