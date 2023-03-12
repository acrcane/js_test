'use strict'
// 1. Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);

//   },
// };
// product.showPrice();

// 2. Яким буде результат виклику функції?
// function f() {
//   console.log(this.name);
// }

// const foo = f.bind({ name: "Іван" }).bind({ name: "Петро" });

// foo();
// 3. Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }
// callAction(product.showPrice.bind(product));

// 4. Функція askPassword приймає 2 колбека і викликає 1 із них в залежності від password
// function askPassword(ok, fail) {
//   let password = prompt("Password?");
//   if (password === "admin") ok();
//   else fail();
// }

// const user = {
//     name: 'John',
//     loginOk(){
//         console.log(`${this.name} logged in`);
//     },
//     loginFail(){
//         console.log(`${this.name} failed to log in`);
//     }
// }
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user))
// Створи об 'єкт user з властивостю name і двома методами
// loginOk() і loginFail()
// ці методи виводять в консоль повідомлення у форматі
// "<name> logged in" та "<name> failed to log in" відповідно
// зроби виклик функції askPassword, прив'язавши в якості аргументів методи об'єкта


//1. Створи клас User для створення користувача з такими властивостями:
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. конструктор очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

class User {
  constructor({ userName, age, numbersOfPost }) {
      this.userName = userName;
      this.age = age;
      this.numbersOfPost = numbersOfPost;
    }
    getInfo() { 
        return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`;
    }
}

const ivan = new User({ userName: 'Ivan', age: 26, numbersOfPost: 53 });

console.log(ivan.getInfo());

