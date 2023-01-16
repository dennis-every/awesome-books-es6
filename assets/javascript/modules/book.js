import { storeData, retrieveData } from './handleData.js';

let newBooksArray = [];

export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Math.random();
  }

  static addBook = (book) => {
    const newBook = new Book(book.title, book.author);
    newBooksArray = retrieveData();
    newBooksArray.push(newBook);
    storeData(newBooksArray);
    window.location.reload();
  };

  static removeBook = (book) => {
    newBooksArray = retrieveData();
    newBooksArray = newBooksArray.filter((e) => e.id !== book.id);
    storeData(newBooksArray);
  };
}
