
import {ServerApiVersion, MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export const lambdaHandler = async (event, context) => {

    const uri = process.env.ATLAS_URI;
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
    });

    try {
        
        await client.connect();
        const collection = client.db('green-shop').collection('products');
        const result = collection.find({}).toArray();
        return result;
        
    } catch (err) {
        console.log(err);
        return err;
    }
};
