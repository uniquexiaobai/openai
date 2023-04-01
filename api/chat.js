import get_client from "../utils/openai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
    return;
  }

  const authorization = req.headers?.authorization;
  const apiKey = authorization?.split(' ')?.[1]
  if (!apiKey) {
    return res.status(403).end(`Authorization not found in headers`)
  }

  const openai = get_client(apiKey)
  const completion = await openai.createChatCompletion(req.body);

  res.setHeader("Content-Type", "application/json");
  return res.status(200).json(completion.data);
}
