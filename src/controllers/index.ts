import { getBookByISBN } from "../services";
import { NextFunction, Request, Response } from "express";
import { Book } from "../dataModels/dataShapes";

export const getBookInfo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const data: Book = {
    isbn: req.query.isbn as string,
    title: req.query.title as string,
    number_of_pages: req.query.number_of_pages as string, 
    publication_date: req.query.publication_date as string
  };

  try {
    const fetchedData = await getBookByISBN(data);
    res.send(JSON.stringify(fetchedData.rows)).status(201);
    next();
  } catch (error) {
    res.sendStatus(500) && next(error);
  };
}
