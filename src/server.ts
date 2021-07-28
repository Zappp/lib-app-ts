import express from 'express';
import config from './config';
import { router } from './routes';

async function startServer() {

  const app = express();
  app.use(express.json());
  
  app.use('/api', router);

  app.get('/', (req, res) => {
    res.send('Server is working!')});

  app.listen(config.server.port, () => console.log(`Server is ready on port ${config.server.port}!`));

}

startServer();
