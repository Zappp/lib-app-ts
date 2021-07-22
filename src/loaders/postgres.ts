import { Client } from 'pg';
import config from '../config';

const client = new Client({
  connectionString: config.database.url,
  ssl: {
    rejectUnauthorized: false
  }
});

client
  .connect()
  .then(() => console.log('connected'))
  .catch(err => console.error('connection error', err.stack))

  export default client
