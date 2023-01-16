import {
  listLink, addBookLink, contactLink,
  listHandler, addBookHandler, contactHandler,
} from './modules/nav.js';
import setDateTime from './modules/setDateTime.js';

const booksList = document.getElementById('books_list');
const bookForm = document.getElementById('booksForm');

export const contactSection = document.getElementById('contact-section');
export const addBookSection = document.getElementById('form_section');
export const booksSection = document.getElementById('books_section');

export const dateElement = document.getElementById('date');

let booksArray = [];

let availableStorage;

function retrieveData() {
  const data = availableStorage.getItem('books');
  const parseData = JSON.parse(data);
  if (parseData) {
    booksArray = parseData;
  }
}

function storeData(booksArray) {
  if (availableStorage) {
    const jsonData = JSON.stringify(booksArray);
    availableStorage.setItem('books', jsonData);
  }
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Math.random();
  }

  static addBook(book) {
    const newBook = new Book(book.title, book.author);
    booksArray.push(newBook);
    storeData(booksArray);
    window.location.reload();
  }

  static removeBook(book) {
    booksArray = booksArray.filter((e) => e.id !== book.id);
    storeData(booksArray);
  }
}

// Check if local storage available
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && storage && storage.length !== 0);
  }
}

if (storageAvailable('localStorage')) {
  // Yippee! We can use localStorage awesomeness
  availableStorage = window.localStorage;
} else {
  // Too bad, no localStorage for us
  availableStorage = null;
}

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
  retrieveData();
  loadBooks();
  setDateTime();
};

listLink.addEventListener('click', listHandler);
addBookLink.addEventListener('click', addBookHandler);
contactLink.addEventListener('click', contactHandler);
