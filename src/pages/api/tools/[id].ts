import { VercelRequest, VercelResponse } from "@vercel/node";
import connectToDatabase from "../../../utils/connectToDatabase";

import { ObjectId } from "mongodb";

export default async (req: VercelRequest, res: VercelResponse) => {
  const { name, description, link } = req.body;

  const {
    query: { id },
    method,
  } = req;

  const db = await connectToDatabase(process.env.DATABASE_URL);

  const collection = db.collection("tools");

  const o_id = new ObjectId(`${id}`);

  switch (method) {
    case "GET":
      const tool = await collection.findOne({ _id: o_id });

      if (!tool) {
        return res.status(404).json({ error: "Tool not found" }).end();
      }

      return res.status(200).json(tool).end();
    case "PUT":
      await collection.findOneAndUpdate(
        { _id: o_id },
        { $set: { name, description, link } },
        { upsert: true }
      );

      return res.status(200).end();
    case "DELETE":
      try {
        const tool = await collection.findOne({ _id: o_id });
        if (tool) {
          await collection.findOneAndDelete({ _id: o_id });
        }

        return res.status(200).end();
      } catch (err) {
        return res.status(500).json({
          error: "Error when deleting tool, please try again.",
        });
      }
    default:
      break;
  }
};
