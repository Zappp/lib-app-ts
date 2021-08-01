import { QueryResult } from "pg";
import { Book } from "../dataModels/dataShapes";
import { getBookByParamsDB} from "../db";

export const getBookByParams =  async (data: Book): Promise<QueryResult> => {
  try {
    const dbResponse = await getBookByParamsDB(data); 
    return dbResponse;
  } catch(error) {
    throw new Error(error.message);
  };
};
