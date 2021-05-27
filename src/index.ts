import express = require('express');
import logger = require('morgan');
import helmet = require('helmet');

import { Request, Response } from 'express';

const app = express();

app.use(logger('dev'));
app.use(helmet());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send({});
});

// start the Express server
const port = app.get('port') || 3001;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
