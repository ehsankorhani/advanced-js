try {
    x = 10 / y;
} catch (e) {
    console.log(`An error occurred: ${e}`);
}

// try {
//     setTimeout(function() {
//       x = 10/y; // script will terminate here
//     }, 1000);
//   } catch (e) {
//     console.log(`An error occurred: ${e}`);
// }



setTimeout(function () {
    try {
        x = 10 / y;
    } catch (e) {
        console.log(`An error occurred: ${e}`);
    }
}, 1000);

try {
    x = 10 / y;
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}

try {
    x = 10 / 2;
    throw new Error('message');
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}

try {
    x = 10 / y;
} catch (e) {
    if (e instanceof ReferenceError) {
        console.log('ReferenceError'); // "ReferenceError" for accessing an undefined variable
    } else {
        throw e;
    }
}