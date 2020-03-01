# Events

**Event** is a signal that something has happened.
<br />
The **Event Handler** reacts on an event and runs a code.

## Event object
```Event()``` constructor creates a new Event object. It can be <u>dispatched</u> and <u>listened</u> from and by any element.

The event object can be created with:

```js
const event = new Event(type[, options])
```

It accepts the *name of the event* and an optional *options* dictionary as arguments.

```js    
const evt = new Event('greeting')
document.dispatchEvent(evt)

document.addEventListener('greeting', (e) => {
  document.querySelector('.text').innerHTML = 'Hello World!'
})
```

Option dictionary includes these boolean values:
* **bubbles** if ```true``` propagation starts from target element and bubbles up until it reaches the root node.  
* **cancelable** if ```true``` enables the listener to cancel the event default behavior with ```preventDefault()```.
* **composed**

```js
const container = document.querySelector('.container')
const elem = document.querySelector('.text')

window.setTimeout(() => {    
  const evt = new Event('greeting', { bubbles: true, cancelable: true })
  elem.dispatchEvent(evt)
}, 2000)

elem.addEventListener('greeting', (e) => {
  elem.innerHTML = 'Hello World from the Element!'
  console.log('element loaded...')
})

container.addEventListener('greeting', (e) => {
  elem.innerHTML = 'Hello World from the Container!'
  console.log('container loaded...')
})
```

In the example above, because ```bubbles``` is true for ```evt```, it can be listened by the containing element.
<br /> 
If false, ```container``` was not able to listed on an event dispatched by ```prg```.

<br />

### dispatchEvent()
Triggers the EventListener on the target element.

```js
const evt = new Event('greeting')

document.dispatchEvent(evt)
document.querySelector('.text').dispatchEvent(evt)
```

The return value of from a dispatch is always ```true```, except if the event is ```cancelable``` and the event handler calls ```preventDefault()``` on the event.

```js
const evt = new Event('greeting', { cancelable: true })
isCancelled = !document.dispatchEvent(evt) // true

document.addEventListener('greeting', (e) => {
  e.preventDefault()
})
```

<br />

### addEventListener()
It sets up a handler for an event on an element.
<br />
It receives a string representing the event type as first argument.
The second argument is the *listener* function that will fire when the event is dispatched.

```
addEventListener(type, listener, useCapture)
```

#### useCapture
Event capturing and bubbling are two methods of event propagation:

**Event Capturing**
is a type of event propagation that event starts from the root node (outer most) and reverse the DOM until it reaches the element that has raised the event.

**Event Bubbling**
propagation starts from target element (inner most) and bubbles up until it reaches the root node. This is the default behavior of ```addEventListener```.

```js
document.querySelector('.text').addEventListener('greeting', (e) => {
  console.log(e.target);
}, true)
```

In the code above, capturing has been selected. Therefore, if a *dispatch* for *greeting* has happened in an element inside ```.text```, it will be captured by ```.text``` listener first.

The event will *propagate* further in if this listener does not call ```e.stopPropagation()```.

<br />

## CustomEvent constructor
Is essentially almost the same as ```Event``` constructor, except that it can include more data with the ```detail``` property.

```js
const evt = new CustomEvent('greeting', {
  detail: {
    name: 'Alfie',
    salutation: 'Mr.'
  }
})

window.setTimeout(() => {  
  document.dispatchEvent(evt)
}, 2000)

document.addEventListener('greeting', (e) => {
  document.querySelector('.greeting').innerHTML = `Greeting ${e.detail.salutation} ${e.detail.name}`
})
```

<br />

## Event Methods

#### preventDefault()
Cancels the event if it's cancelable. Useful when we just want to get notified if an event has been raised, but we want to take a different action.

```js
<form>
  <label>Agree:</label>
  <input type="checkbox" class="chb" />
</form>

<script>
  document.querySelector('.chb').addEventListener('click', (e) => {
    e.preventDefault()    
  })  
</script>
```

The ```preventDefault``` in the example will prevent the checkbox from being checked.

<br />

#### stopPropagation() & stopImmediatePropagation()
These methods blocks an event from capturing or bubbling further more.

This is particularly helpful when place it on the target element event handler itself when we don’t want any other eventListener to handle the event in the default bubble phase.

The difference between the two method is that ```stopPropagation()``` still allows other handlers to be executed on the element, but ```stopImmediatePropagation()``` stops all events from happening.

<br />

---

## Browser Events
Several methods to handle an event exist:
### HTML-attribute
