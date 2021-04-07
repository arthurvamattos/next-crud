import { VercelRequest, VercelResponse } from "@vercel/node";
import connectToDatabase from "../../../utils/connectToDatabase";

export default async (req: VercelRequest, res: VercelResponse) => {
  const { name, description, link } = req.body;
  const db = await connectToDatabase(process.env.DATABASE_URL);

  const collection = db.collection("tools");
  let tool;

  try {
    tool = await collection.insertOne({
      name,
      description,
      link,
      createdAt: new Date(),
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error on tool save, please try again.",
    });
  }

  return res.status(201).json(tool.insertedId);
};
