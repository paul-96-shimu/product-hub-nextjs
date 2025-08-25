// password-ae1v3XZoBDiQS4Pg  username-product-hub

import { MongoClient, ServerApiVersion } from "mongodb";

let cachedClient = null;
let cachedDb = null;

export default async function dbConnect() {
  if (cachedDb) {
    return cachedDb;
  }
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("Please add your Mongo URI to .env.local");
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  if (!cachedClient) {
    cachedClient = await client.connect();
  }
  cachedDb = cachedClient.db();
  return cachedDb;
}
