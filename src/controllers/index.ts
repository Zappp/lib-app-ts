import { getBookByISBN } from "../services";
import { NextFunction, Request, Response } from "express";

export const getBookInfo = async (req: Request , res: Response, next: NextFunction): Promise<void> => {
  const isbn  = <string>req.query.isbn;
  // const numberOfPages = Number(req.query.numberOfPages);
  // console.log(JSON.stringify(numberOfPages));
  try {
    const fetchedData = await getBookByISBN(isbn);
    res.send(JSON.stringify(fetchedData.rows)).status(201);
    next();
  } catch(error) {
    console.log(error.message)
    res.sendStatus(500) && next(error)
  }
}
