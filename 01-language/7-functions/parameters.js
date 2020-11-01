let greeting = function (name) {
  name = 'Jane'
	
	console.log(`Hi ${name}`);
}

let name = 'Alfie';

greeting(name);

console.log(name);

// ----------------------------------------

let greeting2 = function (person) {
  person.name = 'Jane'
	
	console.log(`Hi ${person.name}`);
}

let person = {
  name: 'Alfie',
}

greeting2(person);

console.log(person.name);

// ----------------------------------------

let greeting3 = function (name, salutation) {	
	console.log(`Hi ${salutation}`);
}

greeting3('Alfie');

// ----------------------------------------

let greeting4 = function (name, salutation = 'Dr.') {	
	console.log(`Hi ${salutation}`);
}

greeting4('Alfie');
greeting4('Alfie', 'Mr.');

// ----------------------------------------

let greeting5 = function (name) {	
	console.log(arguments);
	console.log(`Hi ${arguments[1]} ${name}`); // -> Hi Mr. Alfie
}

greeting5('Alfie', 'Mr.');

// ----------------------------------------

// ES5
let sortArgsES5 = function () {
  let args = Array.prototype.slice.call(arguments);
	return args.sort();
}

// ES6
let sortArgsES6 = function () {
  let args = Array.from(arguments);
	return args.sort();
}

console.log(sortArgsES5(1, 9, 5))
console.log(sortArgsES6(1, 9, 5))

// ----------------------------------------

const foo1 = function () {
  return;
}

console.log(foo1());

// ----------------------------------------

const foo2 = function () {
	return
		'hello world!';
}

console.log(foo2());

// ----------------------------------------

const foo3 = function () {
	return (
		'hello world!'
	);
}

console.log(foo3());