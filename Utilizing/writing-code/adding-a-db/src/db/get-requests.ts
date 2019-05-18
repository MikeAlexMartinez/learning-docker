import { PoolClient } from 'pg';
import format from "pg-format";
import fetchClient from './connect';
import { LogEntryHash } from './../types/log-entry';

async function getRequests(count?: number): Promise<LogEntryHash[]> {
  let dbClient: PoolClient;
  let requests: LogEntryHash[];

  if (!count || count > 25 || count < 5) {
    count = 25;
  }

  try {
    dbClient = await fetchClient();
    if (dbClient) {
      try {
        const sql = format(`
          SELECT ip, path, host AS hostname, requested_at AS timestamp
          FROM requests
          ORDER BY id DESC
          LIMIT %s
        `, count);
        requests = (await dbClient.query(sql)).rows;
      } catch (e) {
        console.error(e);
        throw new Error('Error querying db');
      } finally {
        dbClient.release();
      }

      return requests;
    }
    throw new Error('No Client returned');
  } catch (e) {
    console.error(e);
    throw new Error('Error connecting to db');
  }
}

export {
  getRequests
};