import { Client } from 'pg';

const client = new Client({
  host: process.env.DB_HOST_LOCAL,
  user: process.env.DB_USER_LOCAL,
  password: process.env.DB_PASSWORD_LOCAL,
  database: process.env.DB_NAME_LOCAL,
  port: 5432,
});

client
  .connect()
  .then(() => console.log('connected'))
  .catch(err => console.error('connection error', err.stack))
export default client;


// import { Client } from 'pg';

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// client.connect();

// export default client
