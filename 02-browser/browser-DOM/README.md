# Browser environment

JavaScript runs in a host environment. Any host environment provides some objects and functions in addition to the JavaScript code features.

Browser has a global *root* object called ```window```.

### Document Object Model

DOM represents page content and is an API for HTML to interact with it's structure.

```js
const contentElem = document.getElementById('contentSection');
const contentParagraphs = contentElem.querySelectorAll('p.text');
content.style.color = 'blue';
```

### Browser Object Model

These objects are provided to interact with the browser. and includes:

* location
* history
* navigator
* screen
* frames
* XMLHttpRequest
* ...

```js
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
window.frames[0].location = "https://www.ecma-international.org";
```

## DOM tree
Every HTML tag is an object and nested tags are children of the enclosing tag.

```js
const root = document.documentElement.nodeName; // HTML
const head = document.head; // <head>...</head>
const pageTitle = document.title; // -> the text inside <title></title>

document.body.style.background = 'green';
```

**Note:** ```document.body``` can be ```null``` if you try to access it before in has rendered (in the ```head``` section for instance).

<br />

### Children

