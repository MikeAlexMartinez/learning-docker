import { PoolClient } from 'pg';
import format from "pg-format";
import fetchClient from './connect';
import { LogEntry } from './../types/log-entry';

async function writeLogToDb(logEntry: LogEntry): Promise<number> {
  let dbClient: PoolClient;
  let logsWritten: number = 0;

  try {
    dbClient = await fetchClient();
    if (dbClient) {
      try {
        const sql = format(`
          INSERT INTO requests(ip, path, host, requested_at)
          VALUES %L
        `, [logEntry]);
        logsWritten = (await dbClient.query(sql)).rowCount;
      } catch (e) {
        console.error(e);
        throw new Error('Error querying db');
      } finally {
        dbClient.release();
      }

      return logsWritten;
    }

    throw new Error('No dbClient returned');
  } catch (e) {
    console.error(e);
    throw new Error('Error connecting to db');
  }
}

export {
  writeLogToDb
};