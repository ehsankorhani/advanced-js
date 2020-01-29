
let app = function () {
	let name = 'Alfie';
	
	let greeting = function () {
		let time = 'morning';

		console.log(`Good ${time} ${name}`);
  }
  
  greeting();
	
	//console.log(time);
}

app();

// ----------------------------------------

let name = 'Alfie';

let greeting = function () {
	let name = 'John';

	console.log(`Hi ${name}`); // -> 'Hi John'
}

console.log(`Hi ${name}`); // -> 'Hi Alfie'

greeting();