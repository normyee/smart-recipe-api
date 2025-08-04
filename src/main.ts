import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RecipeModel } from './infra/aws/database/Recipe.model';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  await RecipeModel.createTable();

}
bootstrap();
