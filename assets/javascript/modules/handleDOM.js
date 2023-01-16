import Book from './book.js';
import { retrieveData } from './handleData.js';

const booksList = document.getElementById('books_list');

export const removeBookFromDOM = (book) => {
  const removeBtn = document.getElementById(book.id);
  const bookItem = removeBtn.parentElement;
  bookItem.parentElement.removeChild(bookItem);
};

export const appendBookToDOM = (book) => {
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

export function loadBooks() {
  const booksArray = retrieveData();
  booksArray.forEach((book) => {
    appendBookToDOM(book);
  });
}
