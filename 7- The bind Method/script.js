'use strict';
/* Just like call method , Bind method aloso allows us to manually set this keywords for any function call.
The difference is that bind does not immediately call the function. instead it returns a new function where this keyword is bound. 
so it's set to whatever value we pass into bind. */
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    booking: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
    this.booking.push({flight:`${this.iataCode}${flightNum}`, name })
    }
}
const book = lufthansa.book;

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    booking: [],
};

const swiss = {
    airline: 'swiss',
    iataCode: 'LX',
    booking: [],
}

//Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss)

bookEW(59, 'Sally Draper')

// #Partial Application: means that a part of the arguements the original function already set.
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Bobby Draper') ;


//Using bind with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    this.planes++
    console.log(this.planes)
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// more example about Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1,200))

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23

console.log(addVAT(100))
console.log(addVAT(23))


//Using the functions returning fuction for above example
const addTaxeRate = function(rate) {
    return function(value) {
        return value + value * rate;
    }
} 

const addVAT2 = addTaxeRate('0.23')

console.log(addVAT2(100))
console.log(addVAT2(23))