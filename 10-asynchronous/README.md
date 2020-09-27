# Asynchronous actions

Many actions can be performed in *asynchronous* manner. ```setTimeout``` and ```setInterval``` are two ways to create actions that will run in the future.

Asynchronous actions are functions that initiate now but finish later.

JavaScript is single threaded. Multiple parts of code cannot run at the same time. Callback and asynchronous functions are a way around the single-threaded nature of JavaScript.

<br>
<br>

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

<br>

### Callback in callback

The callbacks are functions, and an can call other passed in functions in the same way they have been called. This chain of nested blocks can cause unnecessary complexity in code which is known as *Callback hell*. 

```js
func1(args, () => {
  func2(args, () => {
    func3(args, () => {
      // And so on…
    });
  });
});
```

<br>

### Error handling

A good practice to handle errors inside - nested - callback functions is to:
1. Reserve the first argument for the errors - if occurs.
2. The test of the arguments are for the success results.

```js
function func1(error, task) {
  if (error) {
    handleError(error);
  } else {
    // ...
    mainFunc(task, func2);
  }
}
```

Overall, it's better to avoid nested callbacks.

<br>
<br />

---

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
<br>

### then, catch, finally

We cannot directly access properties ```state``` and ```result``` of the Promise object. We can use the methods ```.then```, ```.catch``` or```.finally``` for that. 

<br>

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

<br>

### catch
Instead of using the second argument of ```.then``` we can use ```.catch```:

```js
promise.catch(error => { 
  console.log(error)
})
```

Note: when a promise rejects or an error occurs, the control jumps to the closest rejection handler. <br>
If no ```.catch``` is defined, the execution will break.

```js
new Promise((resolve, reject) => {
  setTimeout(() => reject('An error occurred!'), 1000)
}).then((result) => {
  return result * 2;
}).then((result) => {
  return result * 4;
}).catch((err) => {
  console.log(`first catch: ${err}`) // first catch: An error occurred!
}).catch((err) => {
  console.log(`second catch: ${err}`)
});
```

<br>

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
  setTimeout(() => resolve(1), 1000)
});

promise.then((result) => {
  console.log(result); // --> 1
  return result * 2;
});

promise.then((result) => {
  console.log(result) // --> 1
  return result * 2;
});
```

<br>

## Exception handling

> The code of a promise executor and promise handlers has an "invisible ```try..catch```" around it. If an exception happens, it gets caught and treated as a rejection.

```js
new Promise((resolve, reject) => {
  throw new Error("Oops!");
  // or
  reject(new Error("Oops!"));
}).catch((err) => {
  console.log(err) // Error: Oops!
});
```

The ```.catch``` catches explicit rejections and accidental errors in the handlers.

<br>

### Rethrowing

If we don't want to handle an specific error inside a ```.catch``` we can ```throw``` it:

```js
new Promise((resolve, reject) => {
  throw new Error("Oops!");
}).catch((err) => {
  if (error instanceof URIError) {
    // handle it
  } else {
    alert("Can't handle such error");
    throw error; // throwing this or another error jumps to the next catch
  }
});
```

<br>

### Unhandled rejections

Like normal exceptions if a Promise rejection doesn't have a ```.catch``` the JavaScript code will terminate:

```js
new Promise((resolve, reject) => {
  setTimeout(() => reject('An error occurred!'), 1000)
});
```
```
(node:32551) UnhandledPromiseRejectionWarning: An error occurred!
(node:32551) UnhandledPromiseRejectionWarning: Unhandled promise rejection. 
```

<br>

## Chaining Promises
Promises are chainable. That's because ```promise.then``` returns another promise.

```js
new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
}).then((result) => {
  console.log(result) // --> 1
  return result * 2;
}).then((result) => {
  console.log(result) // --> 2
});
```

<br>

### Thenables

A non promise object can contain a function called ```then```. Therefore it's possible to call that object as ```<object-name>.then```. This is called a *promise-compatible* object. Though it's not a Promise, it will be treated the same way.

But ```wait``` can use it only because it supports ```.then```.

```js
class Thenable {
  constructor(val) {
    this.val = val;
  }

  then(resolve, reject) {
    setTimeout(() => resolve(this.val * 2), 1000);
  }
};

async function baz() {
  let result = await new Thenable(1);
  console.log(result); // 2
}

baz();
```

<br>

### When to use Promise
We use *promises* whenever we want to use an asynchronous or blocking code.

> Promises are eager, meaning that a promise will start doing whatever task you give it as soon as the promise constructor is invoked. If you need lazy, check out observables or tasks.<br>
> [JavaScript January](https://www.javascriptjanuary.com/blog/the-promise-of-a-better-future)

<br>

### Promise methods

#### Promise.all
We use this when we want to wait until many promises finish executing.

```js
const promise = Promise.all([...promises...])
```

This promise resolves when all the listed promises are settled:

```js
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(() => {
  console.log(`all done!`)
}).catch(error => {
  console.log(`error: ${error}`)
})
```

<br>

#### Promise.allSettled
Gets the results of all given promises, even if some of them reject.

<br>

#### Promise.race
Waits only for the first settled promise and gets its result or its error.

<br>

### Promises vs. Callbacks
The benefits of promises includes:
1. They allow the natural order. First the main function and then the outcome (```then```). In callbacks we write the callback before the main function.
2. The ```.then``` can be called as many times as needed, but there is only one callback function.

<br>

### Microtasks

> Promise handlers .then/.catch/.finally are always asynchronous.

Even if a Promise resolves immediately, the code after it will execute first.

<br>
<br>

---

## Async/Await

```async``` and ```await``` syntax make the asynchronous syntax look prettier and easier to understand, without the ```.then``` and ```.catch```.

```js
async function foo() {
  return 1;
}
```

The word ```async``` before a function means that the function will return a **resolved promise**.

Therefore, this code is valid:

```js
foo().then(result => { console.log(result) }) // 1
```

We could as well return a promise explicitly:

```js
async function foo() {
  return Promise.resolve(1);
}
```

<br>

## ```await```

The keyword ```await``` makes JavaScript to pause until that promise settles and returns its result.

```js
async function foo() {

  const slow = await slowFunction() // wait until the promise resolves
  console.log(slow)
}

foo()

console.log(`other logics...`)
```
```
other logics...
*result of slow function*
```

While the ```async``` function is paused, the calling function continues running. CPU continues to execute the rest of the logic until promise is resolved.

<br>

### ```await``` requires an ```async``` function

We cannot ```wait``` on regular functions. The ones without ```async```. Also, it's not possible to use ```await``` in the top-level context:

```js
const slow = await fetch('https://www.example.com/car.json')
const car = await slow.json();
// SyntaxError: await is only valid in async function
```

As a workaround we can wrap it inside an anonymous function:

```js
(async () => {
  const slow = await fetch('https://www.example.com/car.json')
  const car = await slow.json();
  //...
})();
```

<br>

### Async Class 

Like other functions, a class async function should be declared with an ```async``` keyword:

```js
class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}
```

<br>

## Error handling

### try/catch

If promise is rejected, it will throw an error:

```js
async function foo() {
  await Promise.reject(new Error("oops!"))
  // same as: throw new Error("oops!") but with delay
}
```

We can use a ```try/catch``` to wrap around the any amount of asynchronous operations:

```js
async function qux() {

  try {
    const response = await fetch('https://www.example.com/car');
    const car = await response.json();
  } catch(err) {
    console.log(err);
  }
}

qux();
```

<br>

### ```.catch```

Although try/catch is more convenient to use, in some occasions such as top-level context we can use ```.catch``` too:

```js
async function qux() {
  const response = await fetch('https://www.example.com/car');
}

qux().catch(result => console.log(result));
```

<br>

### ```Promise.all```

In case we need to wait for multiple promises we can wrap all these operations inside a ```Promise.all```:

```js
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  //...
]);
```