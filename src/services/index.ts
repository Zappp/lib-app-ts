import { QueryResult } from "pg";
import { getBookByISBNDB } from "../db";

export const getBookByISBN =  async (isbn: string): Promise<QueryResult> => {
  try {
    const dbResponse = await getBookByISBNDB(isbn); 
    return dbResponse;
  } catch(error) {
    throw new Error(error.message);
  }
}
