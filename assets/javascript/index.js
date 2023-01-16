import {
  listLink, addBookLink, contactLink,
  listHandler, addBookHandler, contactHandler,
} from './modules/nav.js';
import setDateTime from './modules/setDateTime.js';
import Book from './modules/book.js';
import { loadBooks, appendBookToDOM } from './modules/handleDOM.js';

const bookForm = document.getElementById('booksForm');

export const contactSection = document.getElementById('contact-section');
export const addBookSection = document.getElementById('form_section');
export const booksSection = document.getElementById('books_section');

export const dateElement = document.getElementById('date');

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
