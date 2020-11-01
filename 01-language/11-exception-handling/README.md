# Exception Handling

```try..catch``` constructs allow us to “catch” errors and handle them gracefully when they will in fact can terminate the application process.

The syntax is:

```js
try {
  // code...
} catch (e) {
  // error handling
}
```

For example:

```js
try {
    x = 10/y;
} catch (e) {
    console.log(`An error occurred: ${e}`);
}
```
```
An error occurred: ReferenceError: y is not defined
```

Note that ```try..catch``` only handles runtime exceptions.

<br>

### ```try..catch``` is synchronous

We cannot handle exceptions that are raised inside an asynchronous method:

```js
try {
  setTimeout(function() {
    x = 10/y; // script will terminate here
  }, 1000);
} catch (e) {
  console.log(`An error occurred: ${e}`);
}
```

Because the function executes later outside of ```try..catch```. Therefore, we need to handle the exceptions inside the asynchronous function:

```js
setTimeout(function () {
    try {
        x = 10 / y;
    } catch (e) {
        console.log(`An error occurred: ${e}`);
    }
}, 1000);
```

<br>

## Error object

Is the object that JavaScript generates when an error occurs. This object will be passes to ```catch```.

Two main properties of this object are **name** and **message**.

```js
try {
    x = 10/y;
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}
```
```
ReferenceError
y is not defined
```

Another very widely used property is **stack** which is used for debugging purposes.

<br>

## “Throw” operator

The ```throw``` operator generates an error and can be used to raise an exception when technically no error exist but logically something is incorrect.

Error can be any type of object but preferably we should use one of the JavaScript internal constructors:
- Error
- SyntaxError
- ReferenceError
- TypeError
- ...

```js
try {
    x = 10/2;
    throw new Error('message');
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}
```
```
Error
message
```

<br>

## Rethrowing

> Catch should only process errors that it knows and “rethrow” all others.

We should analyze the the error object in ```catch``` and if we cannot handle it we ```throw err```.

```js
try {
    x = 10 / y;
} catch (e) {
    if (e instanceof ReferenceError) {
        console.log('ReferenceError'); // "ReferenceError" for accessing an undefined variable
    } else {
        throw e;
    }
}
```

<br>

## “finally”

> The finally clause is often used when we start doing something and want to finalize it in any case of outcome.

```js
try {
   // ... try to execute the code ...
} catch(e) {
   // ... handle errors ...
} finally {
   // ... execute always ...
}
```

The code inside ```finally``` will run always, even if we ```return``` from ```try``` clause.

<br>

## Global catch

We can act on unhandled exceptions by using environment specific methods.

Node provides ```process.on("uncaughtException")``` and browsers provide ```window.onerror``` event.

```js
window.onerror = function(message, url, line, col, error) {
  // ...
};
```

<br>

## Extending Error

We can extend the functionality of ```Error``` object to add customized logic.

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("No property: " + property);
    this.name = "PropertyRequiredError";
    this.property = property;
  }
}

// Usage
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
  if (!user.name) {
    throw new PropertyRequiredError("name");
  }

  return user;
}
```