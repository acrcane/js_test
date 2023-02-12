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
