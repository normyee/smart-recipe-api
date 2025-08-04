import { Injectable } from "@nestjs/common";
// import { Recipe } from "src/entity/Recipe";
import { RecipeRepository } from "src/entity/recipe.repository";
import { dynamodb } from "../config";
import { PutItemCommand } from "@aws-sdk/client-dynamodb";


@Injectable()
export class RecipeRepositoryDynamoDB implements RecipeRepository {
    async create(recipe: any) {
        try {
            const item = new PutItemCommand({
                TableName: "recipes",
                Item: {
                    id: { S: "f4154c91-05e4-4234-9ccc-2b9aec96980e" },
                    title: { S: "Sushi" },
                    description: { S: "Uma receita fácil e prática de sushi, o gunkan leva apenas ovas de salmão (ikura), arroz e alga marinha tipo nori, nada mais." }
                }
            })

            await dynamodb.send(item);
        } catch (error) {
            console.error(error);
        }
    }
}