// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
// Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.
// Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.
// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»

const result = 5 + 5 + '5';
console.log('1)' , result);

// -----------------------------------------------------------------

const email = 'kavindarina@gmail.com'
console.log('2)' , email);

console.log(email.includes("@"));
console.log(email.length);

// -----------------------------------------------------------------

const my = "My";
const name = "name";
const is = "is";

let fullName = my + ' ' + name + ' ' + is;
fullName = fullName + ' ' + "Viktor";

console.log('3)' , fullName);

// ----------------------------------------------------------------

const numberSentence = "4)";

const userName = "Василино";
const payment = 250;

const sentence = `${numberSentence}` + ' ' + `Дякуємо, ${userName}! Ви отримали подарунок у розмірі ${payment} гривень`;

alert(sentence)
// ==============================================================================================================================