// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// let header = document.getElementById('main_header');
// console.log(header)
// header.innerText = 'april-2021';

//     b) робить шириниу елементу ul 400px
// let ul = document.querySelector('ul');
// console.log(ul)
// ul.style.width = '400px';

//     c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList = document.querySelectorAll('.linkList');
// for (const iterator of linkList) {
//     iterator.style.width = '50%'
// }


//     d) отримує текст який зберігається в елементі з класом listElement2

// let getText = document.querySelector('.listElement2 a');
// console.log(getText);

//     e) отримує всі елементи li та змінює ім колір фону на сірий
// let li = document.querySelectorAll('li')
// for (const iterator of li) {
//     iterator.style.backgroundColor = 'grey'
// }
//     f) отримує всі елементи 'a' та додає їм клас anchor


//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let a = document.querySelectorAll('a');
// for (const iterator of a) {
//    if(iterator.innerHTML === 'link3'){
//        iterator.style.fontSize = '40px'
//    }
// }

//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let a = document.querySelectorAll('a');
// for (const iterator of a) {
//     let xxx = iterator.innerHTML;
//     iterator.className = `element_${xxx}`
// }


//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subHeader = document.getElementsByClassName('sub-header');
// let bg = prompt('Please write down a background color');

// for (const iterator of subHeader){
//    console.log( iterator.style.backgroundColor = bg)
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let subHeader = document.getElementsByClassName('sub-header');
//     let bg = prompt('Please write down a background color');

//     for (const iterator of subHeader){
//       if(iterator.innerHTML === 'content 2 segment'){
//         iterator.style.backgroundColor = bg;
//       }        
//     }

//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content1 = document.querySelector('.content_1 p ');
// let text = prompt('')    
// content1.innerHTML = text;

//     l) отримати елементи p та змінити їм padding на 20px
// let p = document.getElementsByTagName('p');
// for (const iterator of p) {
//     iterator.style.padding = '20px'
// }


//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
// let textElements = document.querySelector('.text2');
// textElements.innerHTML = 'april-2021'

//  

// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div

let f1 = document.forms.f1;

const users = [];

f1.addEventListener('submit', (event)=>{
    // event.preventDefault();
    let name = f1.name.value;
    let surname = f1.surname.value;

    let person = {
        name: name,
        surname: surname
    }

    users.push(person)
    localStorage.setItem('user', JSON.stringify(users));
})

// 3. Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.

let f2 = document.forms.f2;
const list = [];

f2.addEventListener('submit', (event)=>{
    event.preventDefault();
    let ItemName = f2.name.value;
    let ItemQuantity = f2.quantity.value;
    let ItemPrice = f2.price.value;
    let ItemImg = f2.imageUrl.value
 

    let arr = {
        name: ItemName,
        quantity: ItemQuantity,
        price: ItemPrice,
        img: ItemImg
    }

    list.push(arr);
    localStorage.setItem('listItem', JSON.stringify(list))
  
    
   
});

let a = document.createElement('a');
a.innerText = 'Click on me and see the result'
document.body.append(a);
a.href = 'list.html';





// ДОДАТКОВО
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар


