# Modules

A module is just a file. One script is one module.

The language-level module system introduced in the standard in 2015, and is now supported by all major browsers.

<br>

## Load modules

* ```export``` keyword labels variables and functions that should be accessible from outside the current module.
* ```import``` allows the import of functionality from other modules.

For instance, the file ```car.js``` can export it's functionality:

```js
// car.js
export function startEngine() {
    console.log('starting');
}
```

And we can import these in ```main.js```:

```js
// index.html
import {startEngine} from './car.js';
```

Note: These type of modules only work with browsers and via a http live server (not file system).

<br>

## Module features

* Modules always ```"use strict"```.
* Global variables are not accessible between modules.
* To share window-level global variable, we can explicitly assign it to window and access as ```window.<variable-name```.
* A module code is evaluated only the first time when imported:
    ```js
    import 'car.js';
    import 'car.js'; // does nothing
    ```
    This is because the both import in fact pointing to same object.
* Change in one imported module affects other's importing the same module:
    ```js
    // car.js
    export let spec = {};
    ```
    ```js
    // main.js
    import {spec} from 'car.js';
    spec.make = 'BMW';    
    ```
    ```js
    // app.js
    import {spec} from 'car.js';
    console.log(spec.make); // BMW
    ```
* In a module, ```this``` is undefined<br>
    in non-module scripts, ```this``` is a global object.

<br>

## Browser-specific features
* Downloading external module scripts ```<script type="module" src="...">``` doesn’t block HTML processing. They load in parallel. 
* The module script waits until the HTML document is fully ready and then run.
* Scripts that go first in the document, execute first.
    ```html
    <script type="module">
    console.log((typeof button); // Ok
    </script>
    <script>
    console.log(typeof button); // Error: button is undefined.
    </script>

    <button id="button">Click Me!</button>
    ```
* Inline async scripts run immediately when ready and will not wait for HTML doc:
    ```html
    <script async type="module">
    import {counter} from './analytics.js';

    counter.count();
    </script>
    ```

<br>

## Export and Import

There are different syntax in Export and import directives.

<br>

## Named Export 

We can export any declaration:

Variables:
```js
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
```

Functions:
```js
// car.js
export function startEngine() {
    console.log('starting');
}
```
or
```js
export const accelerate = (speed) => {
    console.log('speeding');
}
```
or
```js
function drive() {
    console.log('driving');
}

export {drive}
```

Classes:
```js
function class Car {
  constructor(make) {
    this.make = make;
  }
}
```

And we can import them with ```import {...}``` directive selectively:

```js
import {startEngine, accelerate} from './car.js';
startEngine();

//or

import {drive as drv} from './car.js';
drv();
```

or we can import every exported object:

```js
import * as car from './car.js';

car.startEngine();
```

<br> 

### Tree-shaking

Bundlers look at the imports and remove those scripts that are never imported.

<br>

### Default Export

Instead of declaring many objects to be exported we can define one function or class to wrap everything and then use ```export default``` to export everything under that wrapper name:

```js
// car.js

export default class Car { // just add "default"
  constructor(make) {
    this.make = make;
  }
}
```
and
```js
// index.js
import MyCar from './car.js'; // not {Car}

new MyCar('Audi');
```

The alternative syntax is:

```js
function drive() {
    console.log('driving');
}

export {drive as default}
```

If we have a mix of named and default exports:

```js
// car.js

export default class Car { // just add "default"
  constructor(make) {
    this.make = make;
  }
}

export function startEngine() {
    console.log('starting');
}
```

We can import them by:

```js
import {default as Car, startEngine} from './car.js';

new Car('Jaguar');
```

<br>

### Re-export

We can export the imported modules:

```js
export {startEngine} from './car.js'; // re-export immediately
```

or

```js
import Car from './car.js';
export {Car};
```

or 

```js
export {default} from './car.js'; // to re-export the default export
```