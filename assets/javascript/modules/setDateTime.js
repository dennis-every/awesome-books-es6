const dateElement = document.getElementById('date');

export default function setDateTime() {
  dateElement.innerHTML = new Date().toLocaleString();
}
