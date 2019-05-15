import os from 'os';
import url from 'url';
import { Request, Response, NextFunction } from 'express'
import constructLogEntry from './utils/construct-log-entry';
import { writeLogEntry } from './utils/append-to-file';

async function logger(request: Request, response: Response, next: NextFunction) {
  const ip = request.ip;
  const hostname = os.hostname();
  const path = url.parse(request.url).pathname || 'undefined';
  const timestamp = new Date().toISOString();
  const logEntry = constructLogEntry({
    ip, hostname, path, timestamp
  });
  await writeLogEntry(logEntry);
  next();
}

export default logger;
