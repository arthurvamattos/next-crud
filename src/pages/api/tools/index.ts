import { VercelRequest, VercelResponse } from "@vercel/node";

import indexTools from "../../../utils/indexTools";

export default async (req: VercelRequest, res: VercelResponse) => {
  const tools = await indexTools();

  return res.status(200).json(tools);
};
