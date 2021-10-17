'use strict';
// #Lets see how primitives and objects work in the context of fucntions.

const flight = 'LH234'
const passenger = {
    name: 'Alex Turner',
    passport: 24768979798
}

const checkIn = function (flightNum, passengerName) {
    flightNum = 'LH999'
    passenger.name = 'Mr. '  + passenger.name;

    if(passenger.passport === 24768979798) {
        alert('Checked in')
    } else {
        alert ('Wrong Passport~')
    }

}

checkIn(flight, passenger)

console.log(flight)
console.log(passenger) 

// + Passing a primitve type to a function is realy just the same as creating a copy outside of the function. the value is simply copied.
// + On the other hand, when we pass an object to a function, whatever we change in a copy will also happen in the original.


// ERROR: when we make two functions manipulating the same object this will create a problem in our code base.
const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000)

}

newPassport(passenger);
checkIn(flight, passenger)

//+ JS does not have passing by refrence, Js only have passing by value.


