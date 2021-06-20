// 1 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
//   }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
//   }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
//   }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
//   }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
//   }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
//   }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
//   }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
//   }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
//   }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
//   }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
//   }];



//   for (const user of users) {
//     //   console.log(user)

//         let div = document.createElement('div');
//         document.body.appendChild(div);
//         let name = document.createElement('h1');
//         let age = document.createElement('h2');
//         let status = document.createElement('h3');
//         let address = document.createElement('div');

//         name.innerText = user.name;
//         age.innerText = user.age;
//         status.innerText = user.status;


//            for (const key in user.address ) {
//             let p = document.createElement('p')
//               p.innerText = `${key}: ${user.address[key]}`;
//               address.append(p)
//            } 

//         div.append(name, age, status, address );

//   }



// 3 Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html



let rules = [
  {
    title: 'Первое правило Бойцовского клуба.',
    body: 'Никому не рассказывать о Бойцовском клубе.'
  },
  {
    title: 'Второе правило Бойцовского клуба.',
    body: 'Никогда никому не рассказывать о Бойцовском клубе.'
  },
  {
    title: 'Третье правило Бойцовского клуба.',
    body: 'В схватке участвуют только двое.'
  },
  {
    title: 'Четвертое правило Бойцовского клуба.',
    body: 'Не более одного поединка за один раз.'
  },
  {
    title: 'Пятое правило Бойцовского клуба.',
    body: 'Бойцы сражаются без обуви и голые по пояс.'
  },
  {
    title: 'Шестое правило Бойцовского клуба.',
    body: 'Поединок продолжается столько, сколько потребуется.'
  },
  {
    title: 'Седьмое правило Бойцовского клуба.',
    body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
  },
  {
    title: 'Восьмое и последнее правило Бойцовского клуба.',
    body: 'Новичок обязан принять бой.'
  }
];

let content = document.createElement('div');
let h1 = document.createElement('h1');
h1.innerText = 'Правила бойцовского клуба'
let wrap = document.createElement('div');

document.body.append(content);
content.append(h1, wrap)

for (const rule of rules) {
  // console.log(rule.title,  rule.body);
  let block = document.createElement('div');
  wrap.append(block);
  let title = document.createElement('h2');
  title.innerText = rule.title;
  let body = document.createElement('p');
  body.innerText = rule.body;
  wrap.append(title, body);

}
