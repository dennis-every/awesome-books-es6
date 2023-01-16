// Check if local storage available
const storageAvailable = (type) => {
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
};

let availableStorage;
let books = [];

if (storageAvailable('localStorage')) {
  // Yippee! We can use localStorage awesomeness
  availableStorage = window.localStorage;
} else {
  // Too bad, no localStorage for us
  availableStorage = null;
}

export const retrieveData = () => {
  if (availableStorage.getItem('books')) {
    const booksData = availableStorage.getItem('books');
    books = JSON.parse(booksData);
  }
  return books;
};

export const storeData = (booksArray) => {
  if (availableStorage) {
    const jsonData = JSON.stringify(booksArray);
    availableStorage.setItem('books', jsonData);
  }
};
