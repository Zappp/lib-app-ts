import { getBookItemByISBN } from "../services";

export const getBookItemInfo = async (req , res, next) => {
  const [{isbn}]  = req.body;
  console.log(isbn);
  try {
    const data = await getBookItemByISBN(isbn);
    res.send(JSON.stringify(data.rows)).status(201);
  } catch(error) {
    console.log(error.message)
    res.sendStatus(500) && next(error)
  }
}
