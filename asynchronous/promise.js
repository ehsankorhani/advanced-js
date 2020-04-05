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