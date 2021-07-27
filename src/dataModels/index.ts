// enum BookFormat {
//   Hardcover,
//   Paperbook,
//   Audiobook,
//   Newspaper,
//   Ebook,
//   Magazine,
//   Journal
// }

// enum BookStatus {
//   Available,
//   Reserved,
//   Loaned,
//   Lost
// }

// enum AccountStatus {
//   Active,
//   Closed,
//   Canceled,
//   Blacklisted,
//   None
// }

// interface Address {
//   streetAddress: string,
//   city: string,
//   state: string,
//   zipcode: string,
//   country: string
// }

// interface Person {
//   name: string,
//   address: Address,
//   email: string,
//   phone: string
// }

// export class Author {
//   constructor(
//     public name: string) { }

//   getName(): string {
//     return this.name;
//   }
// }

// class Book {
//   constructor(
//     public author: Author,
//     public ISBN: string,
//     public title: string,
//     public subject: string,
//     public publisher: string,
//     public language: string,
//     public numberOfPages: number) {

//   }

//   public getTitle(): string {
//     return this.title;
//   }
// }


// export class BookItem extends Book {
//   constructor(
//     public author: Author,
//     public ISBN: string,
//     public title: string,
//     public subject: string,
//     public publisher: string,
//     public language: string,
//     public numberOfPages: number,

//     // public barcode: string,
//     // public isReferenceOnly: boolean,
//     // public borrowed: Date,
//     // public dueDate: Date,
//     public price: number,
//     // public format: BookFormat,
//     // public status: BookStatus,
//     // public dateOfPurchase: Date,
//     // public publicationDate: Date
//   ) {
//     super(author, ISBN, title, subject, publisher, language, numberOfPages);
//   }
// }

// export class Library {
//   public bookItems: BookItem[] = [];
//   constructor(public name: string, public address: string) { }

//   createBookItem(
//     author: Author,
//     ISBN: string,
//     title: string,
//     subject: string,
//     publisher: string,
//     language: string,
//     numberOfPages: number,
//     price: number
//   ): void {
//     this.bookItems.push(new BookItem(author, ISBN, title, subject, publisher, language, numberOfPages, price));
//   }

//   getAddress(): string {
//     return this.address;
//   }
// }

// export class Catalog {
//   private books: Book[] = [];
//   constructor(public initialBooks: Book[], public creationDate: Date, public totalBooks: number,) {
//     this.books.push(...initialBooks);
//   }
// }

// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// abstract class Account {
//   constructor(
//     public id: string,
//     public password: string,
//     public status: AccountStatus,
//     public person: Person) { }
// }

// export class Librarian extends Account {
//   constructor(id: string, password: string, status: AccountStatus, person: Person) {
//     super(id, password, status, person)
//   }
// }


export interface BarcodeReader {
  barcode_reader_id: number,
  registered_at_date: string,
  is_barcode_reader_active: boolean 
}
