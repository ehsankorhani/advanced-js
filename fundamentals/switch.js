let sum = 2 + 2;

switch (sum) {
  case 3:
    console.log('Too small!');
    break;
  case 4:
    console.log('Exactly!');
    break;
  case 4:
    console.log('Another occurrence!');
    break;
  case 5:
  case 6:
    console.log('Either 5 or 6.');
    break;
  default:
    console.log("I don't know such values.");
}

// ---------------------

switch (sum) {
  case 3:
    console.log('Too small!');
  case 4:
    console.log('Exactly!' );
  case 4:
    console.log('Another occurrence!');
    break;
  default:
    console.log("I don't know such values.");
}