export interface Author {
  name?: string
}

export interface Book {
  isbn: string,
  title?: string,
  numberOfPages?: number,
  publicationDate?: string,
  subject?: string,
  publisher?: string,
  author?: Author
}

export interface BookItem extends Book {
  library?: string,
  rack?: string,
  bookItemFormat?: string,
  bookItemStatus?: string,
  barcode?: string,
  isReferenceOnly?: boolean,
  price?: number,
  dateOfPurchase?: string
}
