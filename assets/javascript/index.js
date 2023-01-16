import {
  listLink,
  addBookLink,
  contactLink,
  listHandler,
  addBookHandler,
  contactHandler,
  booksSection,
} from './modules/nav.js';
import setDateTime from './modules/setDateTime.js';
import Book from './modules/book.js';
import { loadBooks, appendBookToDOM } from './modules/handleDOM.js';

const bookForm = document.getElementById('booksForm');

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newBook = new Book(
    bookForm.elements.title.value,
    bookForm.elements.author.value,
  );
  Book.addBook(newBook);
  bookForm.reset();
  appendBookToDOM(newBook);
});

window.onload = () => {
  booksSection.classList.add('visible');
  loadBooks();
  setDateTime();
};

listLink.addEventListener('click', listHandler);
addBookLink.addEventListener('click', addBookHandler);
contactLink.addEventListener('click', contactHandler);
