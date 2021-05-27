import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  user: 'marcin',
  password: 'password',
  database: 'db',
  port: 5432
});

export default pool;
