import express, { Application, Request, Response, NextFunction} from "express";
import dotenv from 'dotenv-safe';
dotenv.config();

const app: Application = express();
const PORT: string = process.env.PORT || '3000';
const LOG_FILE: string = process.env.LOG_FILE;

async function writeToFile(request: Request) {
  console.log(LOG_FILE);
  console.log(request);
}

app.use(async (req: Request, res: Response, next: NextFunction) => {
  await writeToFile(req);
  next();
});

app.get('/', async (req: Request, res: Response) => {
  await writeToFile(req);
  res.send('Hello Crazy Docker World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});