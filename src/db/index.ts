import { QueryResult } from "pg";
import client from "../loaders/postgres";

export const getBookByISBNDB = async(isbn: string): Promise<QueryResult> => {
  try {
    return await client.query(`SELECT * FROM book WHERE isbn='${isbn}'`);
  } catch (error) {
    throw new Error(error.message);
  }
}
