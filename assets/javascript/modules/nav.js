import { booksSection, addBookSection, contactSection } from '../index.js';

export const listLink = document.getElementById('listLink');
export const addBookLink = document.getElementById('addBookLink');
export const contactLink = document.getElementById('contactLink');

export function listHandler(event) {
  event.preventDefault();
  listLink.style.color = 'blue';
  addBookLink.style.color = 'black';
  contactLink.style.color = 'black';
  booksSection.style.display = 'block';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
}

export function addBookHandler(event) {
  event.preventDefault();
  listLink.style.color = 'black';
  addBookLink.style.color = 'blue';
  contactLink.style.color = 'black';
  booksSection.style.display = 'none';
  addBookSection.style.display = 'flex';
  contactSection.style.display = 'none';
}

export function contactHandler(event) {
  event.preventDefault();
  listLink.style.color = 'black';
  addBookLink.style.color = 'black';
  contactLink.style.color = 'blue';
  booksSection.style.display = 'none';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'block';
}
