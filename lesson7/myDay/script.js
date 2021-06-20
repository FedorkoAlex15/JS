
// Розпорядок дня

function wakeUp(hour) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hour <= 6) {
        resolve('Good job')
      } else {
        reject('Get up lazy ass')
      }

    }, 3000)
  })
}

function eatBreakfast(breakfast) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (breakfast) {
        resolve('Good that you are no longer hungry');
      } else {
        reject('You missed your breakfast')
      }

    }, 2000)
  })
}

function goToWork(work) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (work) {
        resolve('You earn money');
      } else {
        reject('You don t have money')
      }

    }, 2500)
  })
}



// Перший варіант
// wakeUp(9)
// .then( value => {
//   console.log(value);
//   eatBreakfast(true)
//   .then( value => {
//     console.log(value)
//   })

// })
// .catch( reason => {
//   console.error(reason);
// })

//Через promise chain
wakeUp(6)
.then(value => {
  console.log(value);
  return eatBreakfast(true);
})
.then(value => {
  console.log(value);
  return goToWork(false)
})
.then(value => {
  console.log(value)
})
.catch(reason => {
  console.error(reason);
})


// Через асинхронну функцію обгортка

async function myDay() {
  try {
    let wakeup = await wakeUp(6);
    console.log(wakeup);
    let eat = await eatBreakfast(true)
    console.log(eat)
    let work = await goToWork(false)
    console.log(work)
  } catch(e){
    console.error(e)
  }
  
}

myDay()

// =============================================================================================
// =============== Сallbacks


function wakeUp(hour, cb) {
 
    setTimeout(() => {
      if (hour <= 6) {
        cb(null, 'Good job')
      } else {
        cb('Get up lazy ass')
      }

    }, 3000)

}

function eatBreakfast(breakfast, cb) {
    setTimeout(() => {
      if (breakfast) {
        cb(null, 'Good that you are no longer hungry');
      } else {
        cb('You missed your breakfast')
      }
    }, 2000)
}


function goToWork(work, cb) {
      setTimeout(() => {
        if (work) {
          cb(null, 'You earn money');
        } else {
          cb('You don t have money')
        }
  
      }, 2500)
  }




wakeUp(6, (error, data) => {
  if(error){
    console.error(error);
  } else{
    console.log(data) 
    eatBreakfast(true, (error, data) => {
      if(error){
        console.error(error);
      } else{
        console.log(data)
        goToWork(true, (error, data) =>{
          if(error){
            console.error(error);
          } else{
            console.log(data)
          }
        })
      }
    })
  }
})