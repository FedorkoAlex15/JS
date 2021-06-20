// 1  Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// 2 Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// 3 Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.
// 4 За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// 5 За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразаї не використовувати однакові оператори!!!
//   5 ? 6 -> true
//   5 ? 6 -> false
//   5 ? 6 -> false
//   5 ? 6 -> false
//   10 ? 10 -> true
//   10 ? 10 -> true
//   10 ? 10 -> false
//   10 ? 10 -> false
//   10 ? 10 -> false
//   123 ? '123' -> false
//   123 ? '123' -> true

// =========================================================================
// ===1
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

// console.log(greeting, courses, web, Ukraine, one, one, ten, minus, oneTwoThree, beTrue, beFalse );
// alert(greeting);
// alert(courses);
// alert(Ukraine);
// alert(web);
// alert(one);
// alert(ten);
// alert(minus);
// alert(oneTwoThree);
// alert(beTrue);
// alert(beFalse);

// document.write(`<div>${greeting}</div> <div>${courses}</div> <div>${web}</div> <div>${Ukraine}</div> <div>${one}</div> <div>${ten}</div> <div>${minus}</div> <div>${oneTwoThree}</div> <div>${beTrue}</div> <div>${beFalse}</div>`);

// ==========================================================================
//   2
// greeting = 'hi';
// console.log(greeting)
// alert(greeting)
// document.write(greeting)


// ==========================================================================
//   3
// let firstName = "Alex";
// let middleName = "Romanovych";
// let lastName = 'Fedorko';

// let person = (firstName + ' ' +  middleName + ' ' +lastName);

// ==========================================================================

//  4


// 4 За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".


// let name = prompt('your name')
// let surname = prompt('type middle name')
// let age = prompt('age')


// let result = (`Вітаю ${name} ${surname}. Тобі ${age} років `)



//  ==========================================================================
//    5

// 5 За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.


// let a = 100;
// let b = '100';
// let c = true;

// console.log(typeof(a),typeof(b), typeof(c))

// ===================================================================================




// =====================
// ======ДОП============
// =====================




// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)






// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!


// let trafficLight = 'green';

// if(trafficLight === 'green'){
//     console.log('йди')
// } else if(trafficLight === 'yellow'){
//     console.log('почекай')
// } else if(trafficLight === 'red'){
//     console.log('stop')
// } else if(trafficLight === 'Broken'){
//     console.log('роби що хочеш')
// }

//  =========================================================




// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!


// let isRoadClear = confirm('Is road clear?');
// let trafficLight = prompt('color');


// switch(trafficLight){
//     case 'green':
//     isRoadClear ? console.log('Go'): console.log('Stop')
//     break;
//     case 'yellow':
//     isRoadClear ? console.log('Go'): console.log('Stop')
//     break;
//     case 'green':
//     isRoadClear ? console.log('Go'): console.log('Stop')
//     break;

// }