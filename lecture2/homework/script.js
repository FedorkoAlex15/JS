// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// з 5 числових значень
// const nums = [0, 1, 2, 3, 4, 5];

// for(let i = 0; i < nums.length; i++ ){
//     console.log(i);
// }
// // з 5 стічкових значень
// const words = ['A', 'B', 'C','D', 'E', 'F'];

// for( let word of words){
//     console.log(word)
// }

// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// const all = ['A', 2, 'C', true, false, 'F'];

// for( let item of all){
//     console.log(item)
// }

// =======================================================================

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// const names = [];

// names[0] = "Lena";
// names[1] = "Valera";

// ========================================================================

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередин

// for(let i = 0; i < 11; i++){
//     document.write(`<div>Вивести текст</div>`)
// }

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for(let i = 0; i < 11; i++){
//     document.write(`<div>Мій індекс ${i}</div>`)
// }

// ========================================================================
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;

// while (i < 21) {
//     document.write(`<h1>Привіт</h1>`);
//     i++;
// }



// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;

// while (i < 21) {
//     document.write(`<h1>Мій індекс ${i}</h1>`);
//     i++;
// }

// =======================================================================


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//  let users = []

// users[0] = 'Alex';
// users[1] = 20;
// users[2] = true;

// for (user of users){
//     console.log(user)
// }

// =======================================================================


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];


// let usersWithCities = [];

// for (let user of usersWithId){
//     let allInfo = user;
//    for(let location of citiesWithId ){
//        if(location.user_id === user.id){
//            user.address = location;
//        }
//    }

//    usersWithCities.push(user);
// }

// console.log(usersWithCities)










// ============================================================
// ============================================================


// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let mass = ['a', 'b', 'c'];

// for( let u = 1; u <= 3; u++){
//     mass.push(u)
// }

// console.log(mass)

// ============================================

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// const mass = [1, 2, 3];

// for(let i = 3; i >= 1; i--){
//     mass.push(i);
// }

// console.log(mass)

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// const mass = [1, 2, 3];
//  for(let i = 4; i <= 6; i++){
//     mass.unshift(i)
//  }

//  console.log(mass)

// ===========================================================

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].


// let mass = [1, 2, 3, 4, 5];

// for (let i = 1; i < 3; i++){
//     mass.shift();
// }

// const mass2 = mass.slice(3, mass.length);

// console.log(mass);

// const arr = [1, 2, 3, 4, 5];

// const arr2 = arr.splice(0, 3);
// console.log(arr)



// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].

// const arr = [1, 2, 3, 4, 5];

// const arr2 = arr.splice(2, 5);
// console.log(arr)


// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
// let arr = [1, 2, 3, 4, 5];
// arr = arr.splice(0, 3);
// arr.push('a', 'b', 'c',)

// console.log(arr)






