// 1) створити функцію яка приймає масив та виводить його

// let mass = ['Alex', 'Bob', 17];

// function action(){
//     console.log(mass);
//     for(let massItem of mass){
//         console.log(massItem);
//     }
// }



// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.





// function f1(number){
//     const mass = [];
//     for(let i = 0; i < number; i++){
//         let random = Math.random() *99;
//         mass.push(random);
//     }
//     return mass;
// }

//  console.log(f1(10));

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function leastNum(num1, num2, num3){
//     if(num1 < num2 && num1 < num3){
//         console.log(`${num1} is the least`);
//         return num1;
//     } else if (num2 < num1 && num2 < num3){
//         console.log(`${num2} is the least`);
//         return num2;
//     } else{
//         console.log(`${num3} is the least`);
//         return num3;
//     }
// }


// console.log(leastNum(4,1,6));


// 5) створити функцію яка повертає найбільше число з масиву

// let mass = [5,6,8,1,3,9];

// function numbers(mass){
//     let result = Math.max.apply(Math, mass);
//     return result
// }

// console.log(numbers(mass));


// 6) створити функцію яка повертає найменьше число з масиву



// let mass = [5,6,8,1,3,9];

// function numbers(mass){
//     let result = Math.min.apply(Math, mass);
//     return result
// }

// console.log(numbers(mass));


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// function numbers(numbers){
//     let i = 0;

//     for(let num of numbers){
//         i += num;
//     }
//     return i;

// }

// console.log(numbers([5,5]));


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень

// function calc(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }

//     let result = sum / arr.length;

//     return result;
// }


// console.log(calc([1,6]));


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


// let arrObj = [{name: 'Dima', age: 13}, {model: 'Camry'}]

// function keyreturn(arrObj){
//     let Arr = [];
//     for(let i = 0; i < arrObj.length; i++){
//         for(let key in arrObj[i]){
//             Arr.push(key);
//         }
//     }

//     return Arr
// }

// console.log(keyreturn(arrObj));

// ===================================================================

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]



// let arrKey = [{name: 'Dima', age: 13}, {model: 'Camry'}];

// function getValues(arrKey){
//     let newArr = [];
//         for(let val of arrKey){
//            newArr.push( Object.values(val))
    
//     return newArr;
// }





// console.log(getValues(arrKey));



// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]




// function summator(value1, value2) {
//     let sumArr = [];

//     for(let i = 0; i < value1.length; i++){
//       sumArr.push( value2[i] += value2[i] );
//     }

//     let result = sumArr;
    
//     return result;
// }

// console.log(summator([2, 4, 9], [2, 4, 9]));

// ========================================================================


// // - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'


// function normalize(item){
//     return result = item.trim().split();
// }

// return result = item.replace(/ +/g, ' ').trim();

// console.log(normalize(n1));
// console.log(normalize(n2));
// console.log(normalize(n3));




let n1 = '    Harry       Potter      '



function normalize(str){
    let res = ' ';
    for( const item of str.split(' ')){
        if(item){
            res += `${item} `;
        }
    }

    return res.trim();
}

console.log(normalize(n1))

// n1 = n1.replace(/\s+/g, " ");


// var string = "    This    should  become   something          else   too . ";
// string = string.replace(/\s+/g, " ");

// console.log(n1);


