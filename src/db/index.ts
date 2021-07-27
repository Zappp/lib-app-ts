import client from "../loaders/postgres";

export const getBookItemByISBNDB = async(isbn) => {
  try {
    return await client.query(`SELECT * FROM book_item WHERE isbn='${isbn}'`);
  } catch (error) {
    throw new Error(error.message);
  }
}
