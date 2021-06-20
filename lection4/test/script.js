// let krista = {
//   name: 'Kristi',
//   age: 20,
//   payment: 1000,
//   greening: () => {
//     console.log('Hello')
//   }
// }

// let karina = {
//   name: 'Karina',
//   age: 15,
//   payment: 2000,
//   greening: () => {
//     console.log('Hello')
//   }
// }

// let dimas = {
//   name: 'Dioms',
//   age: 25,
//   payment: 4000,
//   greening: () => {
//     console.log('Hello')
//   }
// }


// function User(name, age, gender, skill) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.skill = skill;

//   this.sayHello = function () {
//     console.log(`Hello. My name is ${this.name}`);
//   }
// }
// //
// const karina = new User('Karisha', 15, 'female', 'React');











// const oleg = new User('Oleg', 25, 'male', 'Nude J Ass');
//
// console.log(karina);
//
// karina.sayHello();
// oleg.sayHello()
//
//
// class Human {
//   constructor(age, name, gender) {
//     this.age = age;
//     this.name = name;
//     this.gender = gender;
//     this.money = 0;
//   }

//   eat() {
//     console.log('Om nom nom')
//   }

//   goWork() {
//     this.money += 100;
//   }
// }

//
// class Developer extends Human {
//   constructor(age, name, gender, skill) {
//     super(age, name, gender);
//     this.skill = skill;
//   }
//
//   goWork() {
//     this.money += 99999999;
//   }
//
//   coding() {
//     console.log(`I am codding on ${this.skill}`)
//   }
// }






//
// class TeamLead extends Developer {
//   constructor(age, name, gender, skill, slaves = []) {
//     super(age, name, gender, skill);
//     this.slaves = slaves;
//   }
//
//   showSlaves() {
//     for (const slave of this.slaves) {
//       console.log(`Morning boss. Slave ${slave.name} listen to you!`);
//       console.log('________________________-')
//     }
//   }
// }
//
//
// const dimas = new Human(24, 'Dimasik', 'male');
// const leon = new Developer(25, 'Leon', 'male', ' JS');
//
// const lerka = new TeamLead(32, 'Lera', 'famale', ['JS', 'TS', 'React', 'Node'], [leon, dimas]);
//
// console.log(leon);
//
// leon.goWork();
// leon.coding();
//
// lerka.showSlaves();
//
//
//
// function Animal(name) {
//   this.name = name;
//
//
//   // TO NE OK !!!
//   // this.run = function () {
//   //   console.log(`${this.name} is running`);
//   // }
// }
//
// function Hamster(name, speed) {
//   this.name = name;
//   this.speed = speed;
// }
//
// Animal.prototype.run = function () {
//   console.log(`${this.name} is running`);
// }
//
// // Hamster.prototype = Animal.prototype;
// // Hamster.prototype.__proto__ = Animal.prototype;
// Hamster.prototype = Object.create(Animal.prototype);
//
// Hamster.prototype.run = function () {
//   console.log('Daba-daba-du')
// }
//
//
// let semka = new Animal('Semka');
// let grushka = new Animal('Grusha');
// let zakolka = new Hamster('Zakolka');
//
// semka.run();
// grushka.run();
// zakolka.run()



// function Hamster(name) {
//   this.name = name;
//   this.stomach = [];
// }

// Hamster.prototype.stomach = [];

// Hamster.prototype.findFood = function (food) {
//   this.stomach.push(food);
// }

// let zakolka = new Hamster('Zakolka');
// let barabaskha = new Hamster('Barabashka');

// zakolka.findFood('Apple');
// zakolka.findFood('Peach');

// console.log(zakolka.stomach);
// console.log('____________');
// console.log(barabaskha.stomach);



// ===============================================================
// ДЗ

// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User



// function User(id, name, surname, email, phone) {
//   this.id = id;
//   this.name = name;
//   this.surname = surname;
//   this.email = email;
//   this.phone = phone;
// }

// const arr = [
//   new User(1, 'Tony', 'Stark', 'dhdhhdh@gmail.com', +49494949449),
//   new User(2, 'Dima', 'Stark', 'dhdhhdh@gmail.com', +49494949449),
//   new User(3, 'Sasha', 'Stark', 'dhdhhdh@gmail.com', +49494949449),
//   new User(4, 'Kolia', 'Stark', 'dhdhhdh@gmail.com', +49494949449),
//   new User(6, 'Tania', 'Stark', 'dhdhhdh@gmail.com', +49494949449),
//   new User(7, 'Kristi', 'Stark', 'dhdhhdh@gmail.com', +49494949449),
//   new User(8, 'Yulia', 'Stark', 'dhdhhdh@gmail.com', +49494949449),
//   new User(9, 'Eva', 'Stark', 'dhdhhdh@gmail.com', +49494949449),
//   new User(10, 'Sophia', 'Stark', 'dhdhhdh@gmail.com', +49494949449),
//   new User(11, 'Elon', 'Stark', 'dhdhhdh@gmail.com', +49494949449),
// ];

// console.log(arr)


// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по зростанню
// - Відсортувати його по id. по спаданню

// let filter = arr.filter(function(user){
//   return user.id % 2 === 0;
// })


// console.log(filter)

// - Відсортувати його по id. по зростанню

// let filter = arr.sort(function (user1, user2) {
//   return user1.id - user2.id;
// })


// console.log(filter)


// - Відсортувати його по id. по спаданню

// let filter = arr.sort(function (user1, user2) {
//   return user2.id - user1.id;
// })


// console.log(filter)



// ===============================================================================

// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


class Client {
  constructor(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
  }
}

const items = [
  new Client(1, 'Tomas', 'Musk', 'ruurur@gm', +585885, ['milk', 'sausages', 'pizza']),
  new Client(1, 'Lilia', 'Musk', 'ruurur@gm', +585885, ['milk', 'sausages', 'pizza']),
  new Client(1, 'Elon', 'Musk', 'ruurur@gm', +585885, ['milk', 'sausages', 'pizza']),
  new Client(1, 'Alex', 'Musk', 'ruurur@gm', +585885, ['milk', 'sausages', 'pizza']),
  new Client(1, 'Yulia', 'Musk', 'ruurur@gm', +585885, ['milk', 'sausages', 'pizza']),
  new Client(1, 'Ben', 'Musk', 'ruurur@gm', +585885, ['milk', 'sausages', 'pizza']),
  new Client(1, 'Bob', 'Musk', 'ruurur@gm', +585885, ['milk', 'sausages', 'pizza']),
  new Client(1, 'Yustina', 'Musk', 'ruurur@gm', +585885, ['milk', 'sausages', 'pizza']),
  new Client(1, 'Marta', 'Musk', 'ruurur@gm', +585885, ['milk', 'sausages', 'pizza']),
  new Client(1, 'Oleg', 'Musk', 'ruurur@gm', +585885, ['milk', 'sausages', 'pizza']),

]

console.log(items)



// .6  Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню



let sortOrder = items.sort(function(user1,user2){
   return user2.order.length - user1.order.length;

})

console.log(sortOrder)



// ============================================

// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт c

// !!!!!!!!!!!!!!!!!!!!!!!!

// function Car(model, manufacturer, year, maxspeed, engine) {
//   this.model = model;
//   this.manufacturer = manufacturer;
//   this.year = year;
//   this.maxspeed = maxspeed;
//   this.engine = engine;
//   this.driver = [];




//   this.drive = function () {
//     console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//   }


//   this.info = function () {
//     console.log(`Автомобіль ${this.model}, ${this.year} року випуску. Максимальна швидкість  ${this.maxspeed}км/год`);
//   }

//   this.increaseMaxSpeed = function (newSpeed){
//     const speed = this.maxspeed += newSpeed;
//     console.log(`Швидкість авто тепер ${speed}км/год`);
//   }

//   this.addDriver = function (newDriver) {
//     this.driver.push(newDriver)
//     console.log(this.driver)
//   }

// }



// const car = new Car('Tesla', 'Tesla.inc', 2018, 200, 'electric');
// car.addDriver('Alex')
// console.log(car.info());
// console.log(car.increaseMaxSpeed(150))









// ===================================================================================

// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// class Car{
//   constructor(model, manufacturer, year, maxspeed, engine){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
//     this.driver = [];
//   }

//     drive(){
//       console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//   }

//   info(){
//     console.log(`Автомобіль ${this.model}, ${this.year} року випуску. Максимальна швидкість  ${this.maxspeed}км/год`);
//   }

//   increaseMaxSpeed(newSpeed){
//   const speed = this.maxspeed += newSpeed;
//   console.log(`Швидкість авто тепер ${speed}км/год`);
//  }

//  changeYear(newValue){
//    const newYear = this.year = newValue;
//    console.log(`Автомобіль ${newYear} року випуску`);
//  }

//  addDriver(newDrive){
//   this.driver.push(newDrive);
//   console.log(this.driver)
//  }




// }

// const car = new Car('Tesla', 'Tesla.inc', 2018, 200, 'electric');

// console.log(car.drive(), car.info(), car.increaseMaxSpeed(100), car.changeYear(2020));
// console.log(car)

// car.addDriver('Alex')




// =======




// =======================================================================
          // Практика
// =======================================================================


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Popelushka{
//   constructor(name, age, footSize){
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
//   }
// }


// let Popelushkas = [
//   new Popelushka('Roksa', 20, 36),
//   new Popelushka('Yulia', 20, 35),
//   new Popelushka('Kristi', 22, 34),
//   new Popelushka('Katia', 25, 37),
//   new Popelushka('Nastia', 19, 38),
//   new Popelushka('Sophia', 20, 39),
//   new Popelushka('Vlada', 20, 40),
//   new Popelushka('Yustina', 20, 34),
//   new Popelushka('Eva', 20, 41),
//   new Popelushka('Vika', 20, 42)

// ];

// class Prince{
//   constructor(name, age, foundShoeSize){
//     this.name = name;
//     this.age = age;
//     this.foundShoeSize = foundShoeSize;

//   }
// }



// let prince = [
//   new Prince('Elon', 25, 36)
// ]


// for(let girl of Popelushkas ){
//   for(let boy of prince){
//     if(girl.footSize === boy.foundShoeSize)
//     console.log(`The prince has chosen ${girl.name} with the foot size of ${girl.footSize}`)
//   }
// }
