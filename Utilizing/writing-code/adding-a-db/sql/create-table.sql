CREATE TABLE IF NOT EXISTS requests (
  id SERIAL PRIMARY KEY,
  requested_at VARCHAR,
  ip VARCHAR,
  host VARCHAR,
  path VARCHAR
);