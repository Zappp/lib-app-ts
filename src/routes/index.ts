// import express from 'express';
// import { postSomeData } from '../controllers';

// const router = express.Router();

// router.post('/test', postSomeData);

// export default router;

import express from 'express';

import { postBlogpost } from '../controllers';

const router = express.Router()

router.post('/blogpost', postBlogpost)
