import express from 'express';
import config from './config';
import client from './loaders/postgres';
// import loaders from './loaders';

async function startServer() {

  const app = express();

  app.get('/', (req, res) => res.send('Server is working!'));

  app.listen(config.port, () => console.log(`Server is ready on port ${config.port}!`));
  
  const data = await client.query('select * from account where account_id=1');
  console.log(JSON.stringify(data.rows));
}

startServer();
