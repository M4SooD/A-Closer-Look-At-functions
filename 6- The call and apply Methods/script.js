'use strict';
// #Here we're gonna work with the this keyword and learn how we can set the this keyword manually, and why we would want to do that.

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    booking: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
    this.booking.push({flight:`${this.iataCode}${flightNum}`, name })
    }
}
console.log(lufthansa)
lufthansa.book(239, 'Roger Sterling')
lufthansa.book(145, 'Pete Campbel')

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    booking: [],
};
const book = lufthansa.book;

// + There are three function methods for setting this keyword manually,: Call, Apply, Bind.
console.log('+++++++Call Method++++++  ')
// + In "Call Method" the first arguements is exactly what we want hte this keyword to point to.
book.call(eurowings, 11, 'Joan Harris');
console.log(eurowings)

book.call(lufthansa, 766, "Bert Cooper")
console.log(lufthansa)

const swiss = {
    airline: 'swiss',
    iataCode: 'LX',
    booking: [],
}

book.call(swiss, 784, "Ken Cosgrove")
console.log('+++++++Apply Method++++++  ')

// + In "Apply Method" insted of reciving a list of arguements, its gonna take an array.
const flightData = [583, "Henry Francis"]
book.apply(swiss, flightData)
console.log(swiss)

// + But in modern JS you better use call method insted of apply.
