import { getBookItemByISBNDB } from "../db";

export const getBookItemByISBN =  async (isbn) => {
  try {
    return await getBookItemByISBNDB(isbn);
  } catch(error) {
    throw new Error(error.message);
  }
}
