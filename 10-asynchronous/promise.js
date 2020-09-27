const promise = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees")
  xhr.send()
  xhr.onload = function() {
    if (xhr.status != 200) {
      reject(new Error(`Error ${xhr.status}: ${xhr.statusText}`))
    } else {
      resolve(`Done, got ${xhr.response.length} bytes`)
    }
  }  
})

promise.then(result => { 
  console.log(result)
})

promise.catch(error => { 
  console.log(error)
})

promise.finally(() => { 
  console.log(`stop loading indicator...`)
})

// --------------------

// new Promise((resolve, reject) => {
//   setTimeout(() => reject('An error occurred!'), 1000)
// }).then((result) => {
//   console.log(result)
//   return result * 2;
// }).then((result) => {
//   console.log(result)
//   return result * 4;
// }).catch((err) => {
//   console.log(`first catch: ${err}`) // first catch: An error occurred!
// }).catch((err) => {
//   console.log(`second catch: ${err}`)
// });

// new Promise((resolve, reject) => {
//   throw new Error("Oops!");
//   // or
//   reject(new Error("Oops!"));
// }).catch((err) => {
//   console.log(err) // Error: Oops!
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => reject('An error occurred!'), 1000)
// });