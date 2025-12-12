import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  const timestamp = new Date().toISOString();
  const ip =
    req.headers['x-forwarded-for'] ||
    req.socket.remoteAddress ||
    "unknown";

  res.json({
    timestamp,
    ip
  });
});

app.listen(port, () => {
  console.log(`SimpleTimeService running on port ${port}`);
});
