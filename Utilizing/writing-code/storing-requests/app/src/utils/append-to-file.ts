import fs from 'fs';

const LOG_FILE: string = process.env.LOG_FILE || 'test';

export async function writeLogEntry(logEntry: string[], ) {
  try {
    for (const log of logEntry) {
      await appendToFile(log);
    }
  } catch (e) {
    console.error(e);
    console.error(`Error logging to File`);
  }

  return;
}

export function appendToFile(logEntryRow: string) {
  return new Promise((res, rej) => {
    fs.appendFile(LOG_FILE, logEntryRow, 'utf8', (err) => {
      if (err) {
        return rej(err);
      }
      return res();
    });
  });
}
