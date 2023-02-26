//Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//ключ:значення використовуя Object.keys() та for...of
// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// console.log(user);

// const keys = Object.keys(user);
// for (const item of keys) {
//   console.log(`Key - ${item}: ${user[item]}`)
// }


//2. У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для додавання усіх зарплат та
//збережіть його результат в змінній sum.
//Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// const allSalaries = Object.values(salaries);

// // let sum = 0;

// // for(const key of allSalaries){
// //     sum += key

// // }
// // console.log(sum);

// const newSal =  allSalaries.reduce((sum, key) => sum += key, 0);

// console.log(newSal);

//3. Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає массив об'єктів і
//рядок з назвами каміння.
//Функція рахує і повертає загальну вартість каменів
//з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 6 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 150, quantity: 100 },
//   { name: "Діамант", price: 2000, quantity: 2 },
// ];

// function calcTotalPrice(stones, stonesName) {
//   let total = 0;
//   for (const stone of stones) {
//     if (stone.name === stonesName) {
//       total += stone.price * stone.quantity;
//     }
//   }
//   return total;
// }
// function calcTotalPrice(stones, stonesName) {
//   return stones.reduce((total, stone) => {
//     if (stone.name === stonesName) {
//       total += stone.price * stone.quantity;
//     }
//     return total;
//   }, 0);

// }

// console.log(calcTotalPrice(stones, 'Діамант'));


//7. Напишіть скрипт керування особистим кабінетом інтернет банка
//Є об'єкт account в якому необхідно реалізувати
//методи для работи з балансом та історією транзакцій

//Типів транзакцій всього два.
//Можна покласти або зняти гроші з рахунка
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// //Кожна транзакція це об'єкт з властивостями id, type, amount
// const account = {
//   //поточний баланс рахунка
//   balance: 0,

//   //Історія транзакцій
//   transactions: [],

//   //Метод створює і повертає об'єкт транзакцій
//   //Приймає сумму і тип транзакцій
//   createTransaction(type, amount) {
//     return {
//       type,
//       amount,
//     };
//   },

//   //Метод відповідає за додавання сумми к балансу.
//   //Приймає сумму транзакціи.
//   //Визиває createTransaction для створення об'єкта транзакціи
//   //після чого додає його в історію транзакцій
//   deposit(amount) {
//     this.balance += amount;
//    const transaction = this.createTransaction(Transaction.DEPOSIT, amount);
//    this.transactions.push({...transaction, id: Math.random().toFixed(3)});
//   //  return this.transactions;
//    },


//   //Метод відповідає за зняття сумми з балансу.
//   //Приймає сумму транзакціи.
//   //Визиває createTransaction для створення об'єкта транзакціи
//   //після чого додає йогого в історю транзакцій
//   //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
//   //що недостатньо коштів на рахунку
//   withdraw(amount) {
// if (amount > this.balance){
//   return console.log(`Недостатньо коштів на рахунку`);
// }

//     this.balance -= amount;
//     const transaction = this.createTransaction(Transaction.WITHDRAW, amount);
//     this.transactions.push({...transaction, id: Math.random().toFixed(3)});
//     return this.transactions;
//    },

  //Метод повертає поточний баланс
//   getBalance() {
//     console.log(`На вашому рахунку ${this.balance} коштів`)
//     },

//   //Метод шукає і повертає об'єкт транзакціи по id
//   getTransactionDetails(id) { 
//     const tr = this.transactions.find(tr => tr.id === id)
//     if (!tr) {
//       return console.log(`Транзакція не знайдена`)
//     } else {
//       return tr
//     }
    
//    },

// //Метод повертає кількіств коштів вказаного типу
//   //транзакціи зі всієї історії транзакцій
//   getTransactionType(type) {  },
// };
// console.log(account.deposit(100));
// console.log(account.withdraw(20));
// account.getBalance()
// console.log(account.getTransactionDetails(0))

//1. Напишіть дві функції
// letMeSeeYourName(callback) - питає ім'я користувача
//через prompt и викликає callback функцію
//greet(name) - коллбек, якій приймає ім'я та логірує в консоль
//рядок "Привіт, <name>"
//Реалізуй перевірку, що prompt не пустий
// якщо пустий - додай дефолтне значення

// function letMeSeeYourName(callback) { 
//   let userName = prompt('Введіть імя');
//   if (!userName) { 
//     userName = 'Шановний';
//   }
//   callback(userName);
// }

// function greet(name) { 
//   console.log(`Привіт, ${name}`);
// }

// letMeSeeYourName(greet);

// 2. Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товара, а також callback.
//Функція створює об'єкт товара, додавая йому унікальний
//ідентифікатор у властивість id та викликає callback
//передавая йому створений об'єкт.
//showProduct(product) - коллбек приймає об'єкт
//продукта і логірує його в консоль

function makeProduct(name, price, callback){
  const product = {
    name,
    price,
    id: Math.random() 
  }
  callback(product)
}
function showProduct(product){
  console.log(product);
}

makeProduct('productName', 1111, showProduct);