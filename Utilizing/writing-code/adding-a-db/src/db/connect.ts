import { Pool, PoolClient } from 'pg';

const {
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
} = process.env;

const pool = new Pool({
  user: POSTGRES_USER,
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  password: POSTGRES_PASSWORD
});

async function fetchClient(): Promise<PoolClient> {
  let client: PoolClient;

  try {
    client = await pool.connect();
  } catch (e) {
    console.error(e);
    throw new Error('Error connecting to db...');
  }

  return client;
}

export default fetchClient;