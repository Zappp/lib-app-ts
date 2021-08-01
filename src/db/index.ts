import { QueryResult } from "pg";
import { selectQueryString } from "../utils";
import { Book } from "../dataModels/dataShapes";
import client from "../loaders/postgres";

export const getBookByParamsDB = async (data: Book): Promise<QueryResult> => {
  try {
    return await client.query(selectQueryString('book', data));
  } catch (error) {
    throw new Error(error.message);
  };
};
