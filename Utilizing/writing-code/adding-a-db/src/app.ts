import express, { Application, Request, Response } from "express";
import dotenv from 'dotenv-safe';
dotenv.config();

import logger from "./logger";

const app: Application = express();
const APP_PORT: string = process.env.APP_PORT || '3000';

app.use(logger);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Crazy Docker World!');
});

app.listen(APP_PORT, () => {
  console.log(`Example app listening on port ${APP_PORT}!`);
});