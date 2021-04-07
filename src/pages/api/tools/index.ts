import { VercelRequest, VercelResponse } from "@vercel/node";

import connectToDatabase from "../../../utils/connectToDatabase";

export default async (req: VercelRequest, res: VercelResponse) => {
  const db = await connectToDatabase(process.env.DATABASE_URL);

  const collection = db.collection("tools");

  const tools = await collection.find().toArray();

  return res.status(200).json(tools);
};
