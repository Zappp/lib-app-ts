// import { dataService } from '../services';

// const { createSomeData } = dataService;

// export const postSomeData = async (req, res, next) => {
//   const { tableName, data } = req.body;
//   try {
//     await createSomeData(tableName, data);
//     res.sendStatus(201);
//     next();
//   } catch (error) {
//     console.log(error.message);
//     res.sendStatus(500) && next(error);
//   }
// }

import { createBlogpost } from '../services';

/*
 * call other imported services, or same service but different functions here if you need to
*/
export const postBlogpost = async (req, res, next) => {
  const {user, content} = req.body
  try {
    await createBlogpost(user, content)
    // other service call (or same service, different function can go here)
    // i.e. - await generateBlogpostPreview()
    res.sendStatus(201)
    next()
  } catch(error) {
    console.log(error.message)
    res.sendStatus(500) && next(error)
  }
}
