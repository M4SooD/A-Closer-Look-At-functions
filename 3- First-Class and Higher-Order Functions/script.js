'use strict';
// + JS is a language that has first class functions
// #First-Class Functions: Functions are simply treated as values(Functions are first citizens)

// + Functions are realy just another type of objects in JS. And since objects are values, functions are values too.


// ++Since functions are values, there is bunch of interesting thing we can do with them:

// 1.  Store functions in variables or properties: 
const add = (a,b) => a +b;

const counter = {
    value: 23,
    inc: function() {this.value++;}
}

// 2.  Pass functions as arguments to OTHER functions:
const greet = () => console.log('Hey You')
btnClose.addEventListner('click', greet)

// 3.  Return fucntions FROM fucntions.

// 4.  Call methods on fucntions:
counter.inc.bind(someOtherObject)


// + JS first-class fucntions makes it possible for us to use and write higher order functions.
/* #Higher-Order Functions: a higher-order functions is either a function that recevies another
 function as an argument or a function that reutrns a new function. */

/* 1. Function that receives another function: In below example addEventListener is a higher-order functions, 
cause it receives another functions as an input. the greet function below is called "Callback Function" */
const greet = () => console.log('Hey You')
btnClose.addEventListner('click', greet)

/* 2. Functions that returns new function: in below example count function is returning a new function,
so count is the Higher-order function here*/

function count() {
    let counter = 0;
    return function() {
        counter++;
    }
}

