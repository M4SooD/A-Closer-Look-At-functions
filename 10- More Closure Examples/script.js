'use strict';
// #Lets now create two more situations in which closures are gonna appear.

//Example 1:
let f;

//f Fuction Borned here
const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2)
    }
}

//f Function reborned here
const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2)
    }
}

g();
f();
console.dir(f)

//Re-assigning f function again
h();
f();
console.dir(f)

/* + closure alway makes sure that a function does not lose the connection to the variables that were present at its birthplace */

console.log("++++++Next++++++")

//Example 2:

const boardPassenger = function(n, wait) {
    const perGroup = n /3;
    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);
    console.log(`Will start boarding in ${wait} seconds`);
};

// + closure has priority over the scope chain
const perGroup = 1000;
boardPassenger(180, 3)

