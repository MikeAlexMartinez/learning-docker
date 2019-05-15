import express, { Application, Request, Response, NextFunction} from "express";
import dotenv from 'dotenv-safe';
dotenv.config();

import logger from "./logger";

const app: Application = express();
const PORT: string = process.env.PORT || '3000';
const LOG_FILE: string = process.env.LOG_FILE || 'test';

async function writeToFile(request: Request) {
  console.log(LOG_FILE);
  // console.log(request);
}

app.use(logger);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Crazy Docker World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});