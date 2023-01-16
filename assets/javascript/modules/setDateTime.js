import { DateTime } from '../vendor/luxon.js';

const dateElement = document.getElementById('date');

const setDateTime = () => {
  const now = DateTime.now();
  dateElement.innerHTML = now.toLocaleString(DateTime.DATETIME_MED);
};

export default setDateTime;
