// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log('req', req.body)
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'admin') {
      res.status(200).json(req.body);
    } else {
      res.status(400).json({ message: "Wrong username or password" });
    }
  } else {
    res.status(200).json({ name: "Hello world!" });
  }
}
