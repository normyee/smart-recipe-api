import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeRepositoryDynamoDB } from './infra/aws/database/recipe.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RecipeRepositoryDynamoDB],
})
export class AppModule { }
