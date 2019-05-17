export type LogEntry = [string, string, string, string];

export interface LogEntryHash {
  ip: string;
  hostname: string;
  path: string;
  timestamp: string;
}