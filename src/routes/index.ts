import express from 'express';
import { getBookInfo } from '../controllers';

export const router = express.Router();

router.get('/book', getBookInfo);
