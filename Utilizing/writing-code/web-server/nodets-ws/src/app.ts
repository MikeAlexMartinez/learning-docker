import express, { Application, Request, Response} from "express";

const app: Application = express();
const PORT: string | number = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Crazy Docker World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
