// import { someDataDb } from '../db'; //chuj na razie test tylko

// export const createSomeData = async (tableName, data) => {
//   try {
//     return await someDataDb(tableName, data);
//   } catch (error){
//     throw new Error(error.message);
//   }
// }

import { blogpostDb } from '../db';

/*
  * if you need to make calls to additional tables, data stores (Redis, for example), 
  * or call an external endpoint as part of creating the blogpost, add them to this service
*/
export const createBlogpost = async (user, content) => {
  try {
    return await blogpostDb(user, content)
  } catch(e) {
    throw new Error(e.message)
  }
}
