import { QueryResult } from "pg";
import { Book } from "../dataModels/dataShapes";
import { getBookByISBNDB } from "../db";

export const getBookByISBN =  async (data: Book): Promise<QueryResult> => {
  try {
    const dbResponse = await getBookByISBNDB(data); 
    return dbResponse;
  } catch(error) {
    throw new Error(error.message);
  };
};
