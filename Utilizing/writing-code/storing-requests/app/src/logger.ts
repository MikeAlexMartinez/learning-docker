import { Request, Response, NextFunction } from 'express'

async function logger(request: Request, response: Response, next: NextFunction) {
  console.log(request);
  next();
}

export default logger;
