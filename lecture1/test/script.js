// // - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// //   Вивести кожну змінну за допомогою: console.log , alert, document.write
// // - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
// //   Вивести кожну змінну за допомогою: console.log , alert, document.write
// // - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.
// // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// //     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// // - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// //   let a = 100; let b = '100'; let c = true;
// // - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
// // В однакових виразаї не використовувати однакові оператори!!!
// //   5 ? 6 -> true
// //   5 ? 6 -> false
// //   5 ? 6 -> false
// //   5 ? 6 -> false
// //   10 ? 10 -> true
// //   10 ? 10 -> true
// //   10 ? 10 -> false
// //   10 ? 10 -> false
// //   10 ? 10 -> false
// //   123 ? '123' -> false
// //   123 ? '123' -> true


// let greeting = 'Hello';
// let courses = 'owu';
// let web = 'com';
// let Ukraine = 'ua';
// let one = 1;
// let ten = 10;
// let minus = -999;
// let oneTwoThree =  123;
// let beTrue = true;
// let beFalse = false;

// console.log(greeting, courses, web, Ukraine, one, one, ten, minus, oneTwoThree, beTrue, beFalse )
// document.write(greeting, courses, web, Ukraine, one, one, ten, minus, oneTwoThree, beTrue, beFalse)
// document.write(greeting)
// document.write(courses)
// document.write(web)
// document.write(Ukraine)


//let company = 'okten'; // string
// let status = 'is cool';
// document.write('<h1>' + company + ' ' + status + '</h1>');
// document.write(`<h1>company - ${company}; staus -    ${status}</h1>`);

// let num = 100500;
// console.log(num);

// let a = 10; // number
// let b = 20;
// console.log(a + b + a);
// console.log(15 % 5);

// const con = 'ajdfhgsafd';
// /* con = 'ashjgsag';*/

// console.log(typeof company); // string
// console.log(typeof num); // number

// //              0       1       2
// let skills = ['html', 'css', 'scrum'];
// console.log(skills);
// console.log(skills[1]);
// skills[3] = a;
// console.log(skills);
// console.log(typeof skills);

// let me = {
//     id: 1,
//     name: 'Serhii',
//     surname: 'Zhuravlov',
//     skills: ['java', 'js', 'html']
// };

// console.log(me);
// console.log(me.name);

// document.write(`<h2>my name is ${me.name} and my primary skill is ${me.skills[0]}</h2>`);
// console.log(me.skills[2]);

// let products = [
//     {id: 1, title: 'milk', price: 23},
//     {id: 2, title: 'juce', price: 25},
//     {id: 3, title: 'bread', price: 16}
// ];

// console.log(products);

// console.log(products[0].id);
// console.log(products[0].title);
// console.log(products[0].price);

// let product1 = products[0];
// console.log(typeof product1);
// document.write(`product #${product1.id}. title -  ${product1.title}, price - ${product1.price}`);

// // > < >= <= == === != !==
// let x = 10;
// let y = 20;
// let z = 30;


// // OR
// // let truth = x < y || x > z;
// // AND
// let truth = x < y && x > z;
// console.log(truth); // false

// if (truth) {
//     console.log('yes');

// } else {
//     console.log('no');
// }


// function calculator(a, b) {
//     let res = a + b;
//     return res;
// }

// console.log(calculator(10, 20));

// let result2 = calculator(100500, 100600);
// console.log(result2);


// function docwr(name) {
//     document.write(`<h3>hello my name is - ${name}</h3>`);
// }

// docwr('vasya');
// docwr('masha');
// docwr('anya');





// let age = +prompt('') 




// let age = +prompt('How old are you?');
// let name = prompt('Enter name');

// if (age >= 18 || name === 'admin') {
//     alert('welcome');
// } else {
//     alert('Go to school boy')
// }
// console.log('Go next')


// let name = 'Vlad';

// switch (name) {
//     case 'Olenlka':
//     case 'Anna':
//         console.log('Hey sister');
//         break;
//     case "Vlad":
//         console.log('Yo ma n');
//     default:
//         console.log('Who are you?')
// }

// перевідяти я буду свою змінну name


// const age = 'Vlad'

// age === 'Ihor' ? alert('Hello') : alert('Go drink')

// let isOld;

// let age 

let age = 90;

const isOld = (age > 88) ? true : false


Math.random();   // рандомні числа від 0 до одинички
Math.random() * 999 // буде від 0 до 999