import { LogEntryHash } from './types/log-entry';
import express, { Application, Request, Response } from "express";
import exphbs from 'express-handlebars';
import dotenv from 'dotenv-safe';
dotenv.config();

import logger from "./logger";
import { getRequests } from './db/get-requests';

const app: Application = express();
const APP_PORT: string = process.env.APP_PORT || '3000';

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')

app.use(logger);

app.get('/requests', async (req: Request, res: Response) => {
  let requests: LogEntryHash[];

  try {
    requests = await getRequests();
    console.log(requests);

    return res.render('requests', {
      requests
    });
  } catch (e) {
    console.error(e);
  }
});

app.get('/', (req: Request, res: Response) => {
  res.render('home');
});

app.listen(APP_PORT, () => {
  console.log(`Example app listening on port ${APP_PORT}!`);
});