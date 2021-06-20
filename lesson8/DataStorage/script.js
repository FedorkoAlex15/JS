// let content = document.getElementById('textarea');

// content.value = localStorage.getItem('text');
// content.oninput = (ev) => {
//     localStorage.setItem('text', ev.target.value);
// }




// Завдання 2

const myform = document.getElementById('myform');


// буде проходитися по кожному елементу і зберігати результат в локал сторідж
function saveForm(tag){
    for(let i = 0; i < tag.length; i++){
        const formEl = tag[i];
        // console.log(formEl);
        перевірка
        if(formEl.type === 'checkbox' || formEl.type === 'radio')
        if (formEl.checked){
            formEl.value = true
        } else{
            formEl.value = false
        }
    
            
        localStorage.setItem(formEl.id, formEl.value)
    }
}

  function getForm(tag){

    for(let i = 0; i < localStorage.length; i++){
       if(localStorage.hasOwnProperty(tag.children[i].id)){
           tag.children[i].value = localStorage.getItem();
            if(tag.children[i].value === 'true'){
                tag.children[i].setAttribute('checked', 'checked')
            }
       
       
        }

    }


  }



























// Тут не можу розібратися

// Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

// const ARRAY_USERS = 'ARRAY_USERS';
// let tempUser = {};

// // Виводимо контент
// const content = document.getElementById('content');


// const form1 = document.forms.form;
// form1.submit.onclick = ev => {
//     ev.preventDefault();
//     let person = {};


//     for (let i = 0; i < form1.children.length; i++) {
//         const formElement = form1.children[i];
   
//         if (formElement.name && formElement.type !== 'submit') {
//             person[formElement.name] = formElement.value;
//         }
//     }
//     person.id = new Date().getTime();
//     console.log(person)
//     saveUser(person)

// }
// //    

   
// //     savePerson(personID);   // запускаємо функцію

// // }

// getDataFromLst()

// function saveUser(user){
//     if(localStorage.hasOwnProperty(ARRAY_USERS)){
//        const arrayUsers = JSON.parse( localStorage.getItem(ARRAY_USERS));
//        const find = arrayUsers.find(value => value.id === user.id);
//        // Якщо юзер є
//        if(find){
//         const filter = arrayUsers.filter(value => value.id !== user.id);
//         filter.push(user)
//         localStorage.setItem(ARRAY_USERS, JSON.stringify(filter))
//        }else{
//         arrayUsers.push(user);  // Добавляю нового юзера в масив
//        localStorage.setItem(ARRAY_USERS, JSON.stringify(arrayUsers));
//     }

//     }else {
//         localStorage.setItem('ARRAY_USERS', JSON.stringify([user]))
//     }

// }


// function getDataFromLst(){
//     if(localStorage.hasOwnProperty(ARRAY_USERS)){
//        const arrUser =  JSON.parse( localStorage.getItem(ARRAY_USERS))
//         for(const user of arrUser){
//             content.appendChild(createDivPerson(user))
//         }
//     }
// }


// function createDivPerson(user){
//    const main =  document.createElement('div');
//     let flag = true;
//     for(const key in user){
//         if(flag){
//             const h3 =  document.createElement('h3');
//             h3.innerText = key + " : " +  user[key];
//             main.appendChild(h3);
//             flag = false;
//         } else {
//           const p = document.createElement('p');
//           p.innerText = key + " : " +  user[key];
//           main.appendChild(p);
//         }
//     }
//     main.style = "width: 300px; border: red 1px solid; float: left;"
//     const b1 = document.createElement('button');
//     const b2 =  document.createElement('bitton')
//     b1.innerText = 'Edit'
//     b2.innerText = 'Delete'
//     b1.onclick = function(){
//         console.log(user.id);
//     }

//     b2.onclick = function(){
//         console.log(user.id);
//     }



//     main.appendChild(b1)
//     main.appendChild(b2)
//    return name
// }


