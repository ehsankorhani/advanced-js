function greeting_var(name) {
  console.log(phrase, 'at top.');

  var phrase = `Hello ${name}`;

  console.log(phrase, 'at bottom.');
}

greeting_var('Alfie Atkins');

/* ------------------------------------------------------------ */

function greeting_let(name) {
  console.log(phrase, 'at top.'); // ReferenceError

  let phrase = `Hello ${name}`;

  console.log(phrase, 'at bottom.');
}

try {
  greeting_let('Alfie Atkins');  
} catch (error) {
  console.log(`error: ${error}`); // Cannot access 'phrase' before initialization
}


/* ------------------------------------------------------------ */

if (true) {
  var fname = 'Alfie';
  let lname = 'Atkins';
}

console.log(fname); // Alfie

try {
  console.log(lname); // ReferenceError
} catch (error) {
  console.log(`error: ${error}`); // lname is not defined
}


