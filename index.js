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

function getTotal(max, min) {
    let total = 0;
    for (let i = max; i >= min; i -= 1) {
        if (i % 2 !== 0) {
            continue;
        }
        total += i;
    }
    return total;
}

console.log(getTotal(100, 1));

 









