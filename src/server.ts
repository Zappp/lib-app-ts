import express from 'express';
import config from './config';
// import loaders from './loaders';

async function startServer() {

  const app = express();

  app.get('/', (req, res) => res.send('Server is working!'));

  app.listen(config.port, () => console.log(`Server is ready on port ${config.port}!`));
  
  
}

startServer();
