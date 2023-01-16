const dateElement = document.getElementById('date');

const setDateTime = () => {
  dateElement.innerHTML = new Date().toLocaleString();
};

export default setDateTime;
