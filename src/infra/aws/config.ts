import { S3Client } from "@aws-sdk/client-s3";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const config = {
    region: "us-east-1",
    endpoint: "http://localhost:4566",
    credentials: {
        accessKeyId: "test",
        secretAccessKey: "test",
    },
};

export const s3 = new S3Client(config);
export const dynamodb = new DynamoDBClient(config);
