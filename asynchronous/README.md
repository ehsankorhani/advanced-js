# Asynchronous actions

Many actions can be performed in *asynchronous* manner. ```setTimeout``` and ```setInterval``` are two ways to create actions that will run in the future.

Asynchronous actions are functions that initiate now but finish later.

JavaScript is single threaded. Multiple parts of code cannot run at the same time. Callback and asynchronous functions are a way around the single-threaded nature of JavaScript.

## Callback
Callback is a function that runs after another function has executed.

### Higher-order functions
In JavaScript functions can be passed as arguments to other functions. That function is called a callback function.

```js
const greeting = (name, done, fail) => {
  if (!name || !name.length > 0)
    return fail('name not specified')

  console.log(`Hi ${name}`)

  done()
}

const done = () => {
  console.log(`task completed.`)
}

const fail = (error) => {
  console.log(`task failed: ${error}.`)
}

greeting('Alfie', done, fail)
```

<br />

## Promise

A promise is an object that may produce a single value some time in the future.

The constructor syntax for a promise object is:

```js
const promise = new Promise(function(resolve, reject) {
  // executor --> The function passed to new Promise
  // resolve() or reject()
})
```

A promise can be in *pending*, *fulfilled*, or *rejected* states.

The executor should perform a task (usually something that takes time or asynchronous) and then call resolve or reject to change the state of the corresponding promise object:

**new Promise(executer)**
> state: "pending" <br>
> result: undefined

**resolve(value)**
> state: "fulfilled" <br>
> result: value

**reject(error)**
> state: "rejected" <br>
> result: error

```js
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
```

### then, catch, finally

We cannot directly access properties ```state``` and ```result``` of the Promise object. We can use the methods ```.then```, ```.catch``` or```.finally``` for that. 

#### then

Can take two arguments. First one is a function that runs when the promise is resolved, and second is a function that runs when the promise is rejected.

```js
promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);
```

Normally, only the *success* function is provided to ```then```.

```js
promise.then(result => { 
  console.log(result) // Done, got 2649 bytes
})
```

### catch
Instead of using the second argument of ```.then``` we can use ```.catch```:

```js
promise.catch(error => { 
  console.log(error)
})
```

### finally
The *foo()* always runs when adding ```.finally(foo)``` to a promise.

```js
promise.finally(() => { 
  console.log(`stop loading indicator...`)
})
```

In *finally* we don’t know whether the promise is successful or not. it's is a good handler for performing cleanups.

Technically we can add many ```.then``` to a single promise. Each of these ```.then```'s can perform a separate logic.

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

promise.then((result) => {
  console.log(result); // --> 1
  return result * 2;
});

promise.then((result) => {
  console.log(result); // --> 1
  return result * 2;
});
```


## Chaining Promises
Promises are chainable. That's because ```promise.then``` returns another promise.

```js
new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
}).then((result) => {
  console.log(result); // --> 1
  return result * 2;
}).then((result) => {
  console.log(result); // --> 2
});
```


## When to use Promise
We use *promises* whenever we want to use an asynchronous or blocking code.

> Promises are eager, meaning that a promise will start doing whatever task you give it as soon as the promise constructor is invoked. If you need lazy, check out observables or tasks.<br>
> [JavaScript January](https://www.javascriptjanuary.com/blog/the-promise-of-a-better-future)
