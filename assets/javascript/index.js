import {
  listLink, addBookLink, contactLink,
  listHandler, addBookHandler, contactHandler,
} from './modules/nav.js';
import setDateTime from './modules/setDateTime.js';
import { retrieveData } from './modules/handleData.js';
import Book from './modules/book.js';

const booksList = document.getElementById('books_list');
const bookForm = document.getElementById('booksForm');

export const contactSection = document.getElementById('contact-section');
export const addBookSection = document.getElementById('form_section');
export const booksSection = document.getElementById('books_section');

export const dateElement = document.getElementById('date');

let booksArray = [];

const removeBookFromDOM = (book) => {
  const removeBtn = document.getElementById(book.id);
  const bookItem = removeBtn.parentElement;
  bookItem.parentElement.removeChild(bookItem);
};

const appendBookToDOM = (book) => {
  const bookItem = document.createElement('li');
  const removeButton = document.createElement('button');
  bookItem.classList.add('book_item');
  removeButton.innerText = 'Remove';
  removeButton.setAttribute('type', 'button');
  removeButton.setAttribute('id', book.id);
  removeButton.classList.add('remove');
  bookItem.innerHTML = `
    <span>"${book.title}"   by   ${book.author}</span> 
   
    `;
  bookItem.append(removeButton);
  booksList.append(bookItem);
  removeButton.addEventListener('click', () => {
    Book.removeBook(book);
    removeBookFromDOM(book);
  });
};

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

function loadBooks() {
  booksArray.forEach((book) => {
    appendBookToDOM(book);
  });
}

window.onload = () => {
  booksSection.classList.add('visible');
  booksArray = retrieveData();
  loadBooks();
  setDateTime();
};

listLink.addEventListener('click', listHandler);
addBookLink.addEventListener('click', addBookHandler);
contactLink.addEventListener('click', contactHandler);
