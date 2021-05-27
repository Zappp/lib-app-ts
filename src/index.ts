require('localenv');
import express = require('express');
import logger = require('morgan');
import helmet = require('helmet');

import { Request, Response } from 'express';
import pool from './db';

const app = express();

app.use(logger('dev'));
app.use(helmet());

app.get('/test', async (request: Request, response: Response) => {
  try {
    const query = await pool.query(`SELECT * FROM categories`);
    const data = query.rows;
    response.status(200).send(data);
  } catch (error) {
    console.log(error.message);
    response.status(500).send(error.message);
  }
});

app.get('/', (req: Request, res: Response) => {
  res.status(200).send({});
});

// start the Express server
const port = app.get('port') || process.env.SERVER_PORT;
app.listen(port, () => console.log(`Server is listening on port ${process.env.SERVER_PORT}`));
