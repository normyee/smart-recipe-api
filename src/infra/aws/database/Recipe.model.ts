import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { dynamodb } from "../config";

export class RecipeModel {
    static async createTable() {
        try {
            await dynamodb.send(new CreateTableCommand({
                TableName: "recipes",
                AttributeDefinitions: [
                    { AttributeName: "id", AttributeType: "S" }
                ],
                KeySchema: [
                    { AttributeName: "id", KeyType: "HASH" }
                ],
                BillingMode: "PAY_PER_REQUEST"
            }));
        } catch (err: any) {
            if (err.name !== "ResourceInUseException") {
                throw err;
            }
        }

    }
}
