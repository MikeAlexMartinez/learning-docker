export type LogEntry = [string, string, string, string];

export interface LogEntryHash {
  id?: number;
  ip: string;
  hostname: string;
  path: string;
  timestamp: string;
}