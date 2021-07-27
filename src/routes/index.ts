import express from 'express';
import { getBookItemInfo } from '../controllers';

export const router = express.Router();

router.get('/bookItem', getBookItemInfo);
