'use strict';
/* #Default Parameters : Sometimes it's useful to have functions where some parameters are set by default
    this way, we do not have to pass them manually, in case we don't want to change the default. 
*/

//Writing Default Parameters in ES5
const bookings = [];
const createBooking = function(flightNum, numPassengers, price) {
    numPassengers = numPassengers || 0
    price = price || 750
    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking)
    bookings.push(booking)
}
createBooking('LH123')
createBooking('LH123', 10, 850)

console.log('++++++++ES6+++++++++')
//Writing Default Parameters in ES6
const bookings6 = [];
const createBooking6 = function(flightNum, numPassengers = 10, price = 750 * numPassengers) {
    const booking6 = {
        flightNum,
        numPassengers,      
        price,
    }
    console.log(booking6)
    bookings6.push(booking6)
}
createBooking6('LH123')
createBooking6('LH123', 10, 850)
createBooking6('LH123', 5 )
// + We can also use values of the other parameters that we set before it
// + For skipping a default parameter we can use undefiend as its values, so it will be at its default.
createBooking6('LH123', undefined, 850)