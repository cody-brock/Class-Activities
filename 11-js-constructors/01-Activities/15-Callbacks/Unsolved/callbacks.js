var fs = require("fs");

var stringTime = "DOOOPOOOODLE"

// Write a function that logs a message, then executes
// a function argument.
var callBack = function(str, func) {
    console.log('msg', msg);
    func()
}

// Write a function that runs a function argument if
// its other argument is truthy.
var truthyFunction = function(bool, func) {
    if (bool) {
        func();
    }
}

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
const crazyFunc = (func, val) {
    return function() {
        return func(val)
    }
}

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?
fs.writeFile('log.txt', 'some data', function(err) {
    if (err) throw err;
})
