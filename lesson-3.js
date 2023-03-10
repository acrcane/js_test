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

// class User {
//   constructor({ userName, age, numbersOfPost }) {
//       this.userName = userName;
//       this.age = age;
//       this.numbersOfPost = numbersOfPost;
//     }
//     getInfo() {
//         return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`;
//     }
// }

// const ivan = new User({ userName: 'Ivan', age: 26, numbersOfPost: 53 });

// console.log(ivan.getInfo());


//2. Напиши класс Client який створює об'єкт
//із властивостями login, email
//Об'яви приватні властивості #login #email,
//доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
  
// get getClientData() {
//   return {login:this.#login, email:this.#email}
// }
// set changeEmail(newEmail) {
//   this.#email = newEmail;
// }
// }
// const ivan = new Client ("admin", "ivan@ukr.net")
// console.log(ivan.getClientData)
// ivan.changeEmail = "ivan2@ukr.net"
// console.log(ivan.getClientData.email)

//3. Напиши класс Notes який управляє коллекцієй нотаток у
//властивості items.
//Нотатка це  об'єкт з властивостями text, priority
//Додай класу статичну властивість Priopity,
//в якій буде зберігатись об'єкт з пріорітетами ("hight", "middle", "low").
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// class Notes {
//   static Priopity = {
//     HIGHT: 'hight',
//     MIDDLE: 'middle',
//     LOW: 'low',
//   };
//   constructor() {
//     this.items = [];
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     const myIndex = this.items.findIndex((item) => item.text === text);
//     if (myIndex === -1) {
//       console.log('NOT FIND ELEMENT');
//     } else {
//       //     this.items.splice(myIndex, 1)
//       this.items = this.items.filter((item) => item.text !== text);
//     }
//   }

//     updatePriority(text, newPriority) {
//      const myIndex = this.items.findIndex((item) => item.text === text);
//      if (myIndex === -1) {
//        console.log('NOT FIND ELEMENT');
//      } else {
//          this.items[myIndex].priority = newPriority;
//      }
//     }
// }

// const notes1 = new Notes();
// notes1.addNote({ text: 'Нотатка 1', priority: Notes.Priopity.HIGHT });
// notes1.addNote({ text: 'Нотатка 2', priority: Notes.Priopity.LOW });
// console.log(notes1);

// notes1.removeNote('Нотатка 3');
// console.log(notes1);

// notes1.updatePriority('Нотатка 1', Notes.Priopity.MIDDLE);
// console.table(notes1.items);


// 4. Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary, який повертає повідомлення
//"Worker <name> has salary <salary> dollars"
//Створити клас TopLevelWorker, у якого є властивість position
//і який успадковує клас Worker, додаючи метод getPosition

class Worker {
  constructor(obj) {
    const { name, age, salary } = obj;
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

    getSalary() { 
        return `Worker ${this.name} has salary ${this.salary} dollars`;
    }
}

const ivan = new Worker({ name: 'ivan', age: 28, salary: 1000 });
console.log(ivan);

console.log(ivan.getSalary());

class TopLevelWorker extends Worker {
  constructor(obj, position) {
    super(obj);
    this.position = position;
  }

    getPosition() { 
        return `Worker ${this.name} works as ${this.position}`;
    }
}

const petroProperties = { name: 'Petro', age: 32, salary: 2000 };
const petro = new TopLevelWorker(petroProperties, 'Developer');
console.log(petro);
console.log(petro.getPosition());
console.log(petro.getSalary());
