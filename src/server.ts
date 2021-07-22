import express from 'express';
import config from './config';
import client from './loaders/postgres';
// import loaders from './loaders';

async function startServer() {

  const app = express();

  app.get('/', (req, res) => res.send('Server is working!'));

  app.listen(config.server.port, () => console.log(`Server is ready on port ${config.server.port}!`));
  
  client.query('select * from account where account_id=1', (err, res) => {
    if(err) throw(err);
    for(const row of res.rows) {
      console.log(JSON.stringify(row));
    }
  });
}

startServer();
