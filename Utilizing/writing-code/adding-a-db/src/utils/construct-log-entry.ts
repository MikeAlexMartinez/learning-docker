import { LogEntry, LogEntryHash } from './../types/log-entry';

function constructLogEntry({
  ip, hostname, path, timestamp
}: LogEntryHash): LogEntry {
  return [
    ip,
    path,
    hostname,
    timestamp
  ];
}

export default constructLogEntry;