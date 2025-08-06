import { Injectable } from "@nestjs/common";
// import { Recipe } from "src/entity/Recipe";
import { RecipeRepository } from "src/entity/recipe.repository";
import { dynamodb } from "../config";
import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { Recipe } from "src/entity/Recipe";
import { v4 as uuidv4 } from 'uuid';


// {
//   "title": "bolo de chocolate",
//     "description": "um bolo simples e delicioso",
//       "ingredients": [
//         "2 ovos",
//         "1 xícara de açúcar",
//         "1/2 xícara de chocolate em pó",
//         "1 xícara de farinha de trigo"
//       ],
//         "howToCook": "misture tudo e asse por 40 minutos a 180 graus",
//           "image": "https://exemplo.com/imagem-bolo.jpg",
//             "thumbnail": "https://exemplo.com/thumbnail-bolo.jpg",
//               "author": {
//     "name": "luan",
//       "email": "luan@email.com"
//   }
// }


@Injectable()
export class RecipeRepositoryDynamoDB implements RecipeRepository {
    async create(recipe: Recipe) {
        try {
            const item = new PutItemCommand({
                TableName: "recipes",
                Item: {
                    id: { S: uuidv4() },
                    title: { S: recipe.title },
                    description: { S: recipe.description },
                    ingredients: { L: recipe.ingredients.map(ingredient => ({ S: ingredient })) },
                    howToCook: { S: recipe.howToCook },
                    image: { S: recipe.image },
                    thumbnail: { S: recipe.thumbnail },
                    author: {
                        M: {
                            name: { S: recipe.author.name },
                            email: { S: recipe.author.email }
                        }
                    }
                }
            })

            await dynamodb.send(item);
        } catch (error) {
            console.error(error);
        }
    }
}