import { dateElement } from '../index.js';

export default function setDateTime() {
  dateElement.innerHTML = new Date().toLocaleString();
}
