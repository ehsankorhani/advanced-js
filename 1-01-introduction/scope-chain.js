function greeting() {
  console.log(`${salutation} ${name}`)
}

function a() {
  var name = 'John';
  greeting()
}

function b() {
  var name = 'John';

  function greeting() {
    console.log(`${salutation} ${name}`)
  }

  greeting()
}

var salutation = 'Dr.'
var name = 'Jane';

a()
b()