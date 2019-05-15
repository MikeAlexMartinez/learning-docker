
function constructLogEntry({
  ip, hostname, path, timestamp
}: {
  ip: string, hostname: string, path: string, timestamp: string
}) {
  return [
    `IP: ${ip}\n`,
    `Hostname: ${hostname}\n`,
    `Path: ${path}\n`,
    `Timestamp: ${timestamp}\n`,
    `------------\n`
  ];
}

export default constructLogEntry;