const car = {
    type: 'vehicle'
}

const tesla = {
    engine: 'electric'
}

tesla.__proto__ = car;
console.log(tesla.type);

const modelS = {
    __proto__: tesla,
    range: 700
}

console.log(modelS.type);

for (let prop in modelS) {
    console.log(prop);
}

for (let prop in modelS) {
    if (!modelS.hasOwnProperty(prop)) continue;
    
    console.log(prop);
}