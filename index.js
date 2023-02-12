//Використовуя функцію if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

const test = prompt('Яка офіційна назва JavaScript?');
if(test === 'ECMAScript'){
    alert('True')
} else {
    alert('False')
}
console.log(test);