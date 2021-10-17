'use strict';
// +Sometimes in JS we need a function taht is only executed once. but how could we do that?

const runOnce = function () {
    console.log('this will never run again')
}
runOnce();

// +This how we doit. and it's called IIFE(Immediately Invoked Function Expressions)
(function() {
    console.log('this will never run again')
})();

(() => console.log('this will also never run again'))();

// +This method is used for data encapsulation and data privacy.