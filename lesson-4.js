// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

// const listEl = document.createElement('ol');
// const addButtonEl = document.createElement('button');
// const removeButtonEl = document.createElement('button');
// const inputEl = document.createElement('input');

// addButtonEl.textContent = 'Add';
// removeButtonEl.textContent = 'Remove';

// document.body.append(inputEl, addButtonEl, removeButtonEl, listEl);

// addButtonEl.addEventListener('click', getListInfo);
// removeButtonEl.addEventListener('click', removeListInfo);

// function getListInfo() {
//   let value = inputEl.value;

//   if (value === '') {
//     return;
//   }
//   const itemEl = document.createElement('li');
//   itemEl.textContent = value;
//   listEl.append(itemEl);
//   inputEl.value = '';

//   // if (listEl.children.length % 2 === 0) {
//   //   itemEl.style.background = 'yellow';
//   // } else {
//   //   itemEl.style.background = 'blue';
//   // }

//   itemEl.style.background = listEl.children.length % 2 === 0 ? 'yellow' : 'blue';
// }

// function removeListInfo() {
//   if (listEl.lastChild) {
//     listEl.lastChild.remove();
//   }
// }

// 2. Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }

// const divEl = document.createElement('div');
// createDiv();
// document.body.append(divEl);

// divEl.addEventListener('click', createDiv);

// function createDiv() {
//   divEl.style.cssText = forms[randomither(forms.length)];
// divEl.style.backgroundColor = getRandomHexColor();
// divEl.style.position = 'absolute';
// divEl.style.top = `${randomither(100)}%`;
// divEl.style.left = `${randomither(100)}%`;
// }

// Завдання 3
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.
// */

// const myInput = document.querySelector("#passwordInput");
// const myBtn = document.querySelector("#passwordButton");
// myBtn.addEventListener('click', hideFunc)

// function hideFunc(){
//     if(myBtn.textContent === 'Розкрити'){
//         myInput.style.color = 'inherit'
//         myBtn.textContent = 'Приховати'
//     } else {
//         myInput.style.color = 'transparent'
//         myBtn.textContent = 'Розкрити'
//     }
// }

// Завдання 16
//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

const tableEl = document.querySelector("#productTable");
const divEl = document.querySelector("#productDetails");

const showMessage = (event) => {
  if (event.target.nodeName !== "TD") return;
  const parent = event.target.parentNode;

  const product = parent.firstElementChild.textContent;
  const price = parent.lastElementChild.textContent;
  divEl.textContent = `Ви вибрали ${product} за ${price}`;
};

tableEl.addEventListener("click", showMessage);
