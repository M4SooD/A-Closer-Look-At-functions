'use strict';
//#Lets make a High-Class function of our own to understand it better

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase()
};

console.log(oneWord('hell    o,  babe'))

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//This one is our Higher-Order Function
const transformer = function(str, fn) {
    console.log(`Original String : ${str}`)
    console.log(`Transformed String : ${fn(str)}`)

    console.log(`Transformed by: ${fn.name}`)
}

transformer('Javascript is the best!', upperFirstWord)
console.log('------Next Example-------')
transformer('Javascript is the best!', oneWord)

console.log('------Next Example-------')
//Js uses callbacks all the time. like in built in functions:
const high5 = function () {
    console.log('👋🏽')
}

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

// + First big advantage of callback functions is that it makes it easy to split up or code into more reuseable and interconnected parts.
// + Second advantage is, that callback functions allow us to create abstraction.
/* #Abstraction: it means that we hide the detil of some code implementation because we don't really care about all that detail.
 this makes us think about problems at a higher more abstarct level. */