const greeting = function(name) {
  return `Hi ${name}`;
}

console.log(greeting.name);
console.log(greeting.length);

// --------------------------------------------------

const newGreeting = new greeting('Alfie')

console.log(greeting.constructor);
console.log(newGreeting.constructor);

