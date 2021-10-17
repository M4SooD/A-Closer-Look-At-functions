'use strict';
//#Lets do the opposite of callback functions, and create a function that returns a new function.
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`)
    }
}

const greeter = greet('Hey')
greeter('Don')
greeter('Peggy') 
// + This is accomplished with a thing called closures that were gonna learn latter.

greet('Yo')('Peter');

//Creating a similar function using the arrow function
const greet1 = greeting1 => name1 => console.log(`${greeting1} ${name1}`)
greet1('Yoo')('Roger')