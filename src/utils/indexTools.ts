import connectToDatabase from "./connectToDatabase";

export default async function () {
  const db = await connectToDatabase(process.env.DATABASE_URL);

  const collection = db.collection("tools");

  const tools = await collection.find().toArray();

  return tools;
}
