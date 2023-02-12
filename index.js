// //Використовуя функцію if...else,
// //напишіть код, який буде питати:
// //"Яка офіційна назва JavaScript?"
// //Якщо користувач вводить "ECMAScript",
// //то показати через alert: "Вірно!"
// //в противному випадку відобразити:"Не знаєте? ECMAScript!"

// const test = prompt('Яка офіційна назва JavaScript?');
// if(test === 'ECMAScript'){
//     alert('True')
// } else {
//     alert('False')
// }
// console.log(test);

//Напишіть цикл, який виводить в консоль
//числа от max до min по убыванию
//Виведіть в консоль суму усіх парних чисел
// const max = 100;
// const min = 1;
// let total = 0;
// for (let i = max; i >= min; i -= 1) {
//   console.log(i);
//   if (i % 2 === 0) {
//     total += i;
//   }
// }
// console.log(total);

// function getTotal(max, min) {
//     let total = 0;
//     for (let i = max; i >= min; i -= 1) {
//         if (i % 2 !== 0) {
//             continue;
//         }
//         total += i;
//     }
//     return total;
// }

// console.log(getTotal(100, 1));

 //Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
//
// 70 === 01:10

// let number = prompt('Enter number:');
// console.log(number);
// const hours = Math.floor( number / 60);
// console.log(hours);
// const minutes = number % 60;
// console.log(minutes);
// const realHours = String(hours).padStart(2, 0);
// const realMinutes = String(minutes).padStart(2, 0);
// console.log(`${realHours}:${realMinutes}`);

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.



// const num = 5;
// let result = '';
// switch (num) {
//     case 1:
//       result = 'зима';
//       break;

//       case 2:
//       result = 'весна';
//       break;

//       case 3:
//       result = 'літо';
//       break;

//       case 4:
//       result = 'осінь';
//       break;

//       default:
//         result = 'число має бути від 1 до 4'
// }
// console.log(result);

// function getSeason (num) {
//     let result = '';
//     switch (num) {
//             case 1:
//               result = 'зима';
//               break;
        
//               case 2:
//               result = 'весна';
//               break;
        
//               case 3:
//               result = 'літо';
//               break;
        
//               case 4:
//               result = 'осінь';
//               break;
        
//               default:
//                 result = 'число має бути від 1 до 4'
//         }
//         return result;
// }
// console.log(getSeason(1));

//Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера

//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

// const login = prompt('Введіть логін');
// console.log(login);
// if (login === "Адмін") {
//     const password = prompt('Введіть пароль')
//     if (password === "Я головний") {
//         console.log('Вітаю')
//     }
//     else {
//         console.log('Невірний пароль!')
//     }
// }
// else if (login === "" || login === null) {
// console.log('Скасовано')
// }
// else {
//     console.log('Я вас не знаю')
// }

// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
//Видаліть перший елемент масива та виведіть його в консоль
// Додайте 'Реп' та 'Реггі' на початок списку.

// const styles =['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');


// // styles.splice(1, 1, 'Класика');
// const index = styles.indexOf('Блюз');
// styles.splice(index, 1, 'Класика')
// console.log(styles);
// // styles[index] = 'Блюз'
// // console.log(styles);
// // styles.shift()
// console.log(styles.shift());
// console.log(styles);
// styles.unshift('Реп', 'Реггі');
// console.log(styles);


// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

// function logItems(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     // console.log(i, array[i]);
//   console.log(`Номер елемента - ${i+1}, значення елемента - ${array[i]}`);
//   }
// }

// logItems(styles);


// Написати ф-цію, яка прибиратиме з масиву всі значення, які перетворюються на false
// undefined, null, false, '', 0, NaN
const array = [
  1,
  0,
  54,
  "doc",
  null,
  "jpg",
  undefined,
  "",
  "png",
  "exe",
  false,
  "mp4",
  NaN,
  "hbs",
];

function getUnnoun(array) {
    const newArray = [];
    for (i = 0; i < array.length; i += 1){
        if (array[i]) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(getUnnoun(array));

// ДЗ:
//1. При завантаженні сторінки користувачу пропонується
//в prompt ввести число. Ввод додається к значенню
//змінної total.
//Операція вводу числа продовжується до тих пір,
//доки користувач не натисне кнопку Cancel в prompt.
//Після того як користувач закінчив ввод натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сумма введенних чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів, не потрібно.

//2. Напишіть цикл, який пропонує ввести
//число більше 100 через prompt.
//Якщо користувач ввів інше число - попросити
//ввести ще раз и так далі.
//Цикл повинен питати число, доки користувач не
//введе число більше 100, чи не натисне кнопку
//Cancel в prompt

// 3. В змінній minuteValue є число від 0 до 59.
// Визначте до якої чверті години входить
// це число(в першу, другу, треттю чи четверту).
// const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);

// 4. Є рядок, який складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є літера 'a'.
// Якщо це так - виведіть 'Так', в іншому випадку - 'Ні'.

// 5. Напишіть функцію min(a, b), яка повертає
// меньше з чисел a, b
//Додати перевірку, що функція отримує числа

// 6. Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі, якщо є - виводить повідомлення
// "Доступ дозволено"

//7. Повернути відсортовану копію масиву за зростанням
//не змінюючи вихідний масив
//не використовувати Array.prototype.sort()
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

//8.Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.