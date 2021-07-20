CREATE TYPE ADDRESS AS(
  street_address TEXT,
  city TEXT,
  state TEXT,
  zipcode TEXT,
  country TEXT
);

CREATE TYPE PERSON AS(
  person_first_name TEXT,
  person_last_name TEXT,
  phone TEXT
);

CREATE TABLE IF NOT EXISTS book(
  isbn TEXT NOT NULL PRIMARY KEY,
  title TEXT,
  number_of_pages INT,
  publication_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS subject(
  subject_id SERIAL PRIMARY KEY,
  subject_name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS publisher(
  publisher_id SERIAL PRIMARY KEY,
  publisher_name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS author(
  author_id SERIAL PRIMARY KEY,
  author_first_name TEXT NOT NULL,
  author_last_name TEXT NOT NULL,
  description TEXT
);

CREATE TABLE IF NOT EXISTS book_has_publisher(
  isbn TEXT NOT NULL REFERENCES book(isbn) ON DELETE CASCADE,
  publisher_id INT NOT NULL REFERENCES publisher(publisher_id),
  PRIMARY KEY(isbn)
);

CREATE TABLE IF NOT EXISTS book_has_subject(
  isbn TEXT NOT NULL REFERENCES book(isbn) ON DELETE CASCADE,
  subject_id INT NOT NULL REFERENCES subject(subject_id),
  CONSTRAINT book_has_subject_pk PRIMARY KEY(isbn, subject_id)
);

CREATE TABLE IF NOT EXISTS book_has_author(
  isbn TEXT REFERENCES book(isbn) ON DELETE CASCADE,
  author_id INT REFERENCES author(author_id),
  CONSTRAINT book_has_author_pk PRIMARY KEY (isbn, author_id)
);

CREATE TABLE IF NOT EXISTS library(
  library_id SERIAL PRIMARY KEY,
  library_name TEXT NOT NULL,
  library_address ADDRESS NOT NULL
);

CREATE TABLE IF NOT EXISTS rack(
  rack_id SERIAL PRIMARY KEY,
  location_identifier TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS book_item(
  library_id INT NOT NULL REFERENCES library(library_id),
  rack_id INT NOT NULL REFERENCES rack(rack_id),
  isbn TEXT NOT NULL REFERENCES book(isbn),
  book_item_format TEXT NOT NULL,
  book_item_status TEXT NOT NULL,
  barcode TEXT NOT NULL,
  is_reference_only BOOLEAN NOT NULL,
  price DECIMAL(12, 2) NOT NULL,
  date_of_purchase TIMESTAMP(0) WITH TIME ZONE NOT NULL,
  PRIMARY KEY (isbn),
  CONSTRAINT book_item_pk UNIQUE (library_id, rack_id, isbn, barcode)
);

CREATE TABLE IF NOT EXISTS account(
  account_id SERIAL PRIMARY KEY,
  password TEXT NOT NULL,
  email TEXT NOT NULL,
  account_status TEXT NOT NULL,
  person PERSON NOT NULL,
  person_address ADDRESS NOT NULL
);

CREATE TABLE IF NOT EXISTS member(
  account_id INT NOT NULL REFERENCES account(account_id),
  date_of_membership DATE NOT NULL,
  total_books_checkedout INT NOT NULL,
  PRIMARY KEY (account_id)
);

CREATE TABLE IF NOT EXISTS librarian(
  account_id INT NOT NULL REFERENCES account(account_id),
  PRIMARY KEY(account_id)
);

CREATE TABLE IF NOT EXISTS library_card(
  library_card_id INT NOT NULL PRIMARY KEY,
  account_id INT NOT NULL REFERENCES account(account_id),
  barcode TEXT NOT NULL,
  issued_at_date TIMESTAMP(0) WITH TIME ZONE,
  is_library_card_active BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS barcode_reader(
  barcode_reader_id INT NOT NULL PRIMARY KEY,
  registered_at_date DATE NOT NULL,
  is_barcode_reader_active BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS reservation_queue( 
  reservation_queue_id SERIAL PRIMARY KEY,
  isbn TEXT NOT NULL REFERENCES book_item(isbn),
  account_id INT NOT NULL REFERENCES account(account_id),
  reservation_status TEXT NOT NULL,
  reservation_queue_start_date TIMESTAMP(0) WITH TIME ZONE NOT NULL,
  reservation_queue_end_date TIMESTAMP(0) WITH TIME ZONE NOT NULL
);

CREATE TABLE IF NOT EXISTS lending(
  lending_id SERIAL PRIMARY KEY,
  isbn TEXT NOT NULL REFERENCES book_item(isbn),
  account_id INT NOT NULL REFERENCES account(account_id),
  lending_creation_date TIMESTAMP(0) WITH TIME ZONE NOT NULL,
  lending_due_date TIMESTAMP(0) WITH TIME ZONE NOT NULL,
  lending_return_date TIMESTAMP(0) WITH TIME ZONE
);

CREATE TABLE IF NOT EXISTS fine(
  fine_id SERIAL PRIMARY KEY,
  lending_id INT NOT NULL REFERENCES lending(lending_id),
  fine_amount DECIMAL(12, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS fine_transaction(
  fine_id INT NOT NULL REFERENCES fine(fine_id),
  creation_date TIMESTAMP(0) WITH TIME ZONE NOT NULL,
  fine_transaction_amount DECIMAL(12, 2) NOT NULL,
  PRIMARY KEY(fine_id)
);
