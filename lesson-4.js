// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

const listEl = document.createElement('ol');
const addButtonEl = document.createElement('button');
const removeButtonEl = document.createElement('button');
const inputEl = document.createElement('input');

addButtonEl.textContent = 'Add';
removeButtonEl.textContent = 'Remove';

document.body.append(inputEl, addButtonEl, removeButtonEl, listEl);

addButtonEl.addEventListener('click', getListInfo);
removeButtonEl.addEventListener('click', removeListInfo);

function getListInfo() {
  let value = inputEl.value;

  if (value === '') {
    return;
  }
  const itemEl = document.createElement('li');
  itemEl.textContent = value;
  listEl.append(itemEl);
  inputEl.value = '';

  // if (listEl.children.length % 2 === 0) {
  //   itemEl.style.background = 'yellow';
  // } else { 
  //   itemEl.style.background = 'blue';
  // }

  itemEl.style.background = listEl.children.length % 2 === 0 ? 'yellow' : 'blue';
}

function removeListInfo() {
  if (listEl.lastChild) {
    listEl.lastChild.remove();
  }
}
