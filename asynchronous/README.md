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

A promise can be *fulfilled*, *rejected*, or *pending*.







---
<!-- Promises are eager, meaning that a promise will start doing whatever task you give it as soon as the promise constructor is invoked. If you need lazy, check out observables or tasks. -->