const person1 = {
  name: 'John'
}

const person2 = {
  name: 'Jane'
}

const greeting = function (city, country) {
  console.log(`Hi ${this.name}. Welcome to ${city} in ${country}.`)
}

greeting.call(person1, 'Sydney', 'Australia')
greeting.call(person2, 'Tokyo', 'Japan')

// ------------------------------------------

greeting.apply(person1, ['Sydney', 'Australia'])
greeting.apply(person2, ['Tokyo', 'Japan'])

// ------------------------------------------

