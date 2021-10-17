'use strict';
// #Now we're gonna look at one of the most important things in JS, Closures.

// + A closure simply happens automatically in certain situations. 

// Creating a closure:
const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++
        console.log(`${passengerCount} passengers`)
    }
}

const booker = secureBooking();
booker();
booker();
booker();

// + a closure makes a function remember all the variables that existed at the function's birthplace. 
/* + a function always has access to the variable enviornment of the execution context in which it was created, 
even after that exectution context is gone */
// #Closure: VE attached to the function, exactly as it was the time and place the function was created.
/* #Closure: a closure gives a function access to all the variables of it's parent function.
 so the function in which it is defind even after that parent function has returned. */
// #Closure: a closure makes sure that a function never lose connection to the variables that existed at the function's birthplace.
// #Closure: a closure is like a backpack that a function carries around wherever it goes.

/* +We cannot access to the closures and take variables from it. because a closure is just an internal property of a function.
 however, what we can do is to actually take a look at this internal property */
console.dir(booker);