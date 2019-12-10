// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties
'use strict';
// this === 'execution context'
// 1st Check to see if the function was invoked with the 'new' keyword
//  if so, make the this of that function, be the object that that function returns
// 2nd Rule Check to see if the function was called with explicit binding
// Check if the function was called with 'apply', 'bind', or 'call'
// Explitcitly change the 'this' context of the function to the object that's passed in
// 3rd Rule The implicit rule
// Check to see, if there's an object to the left of the function call
//  If there is, make that object be the 'this' context of the function
// 4th rule Default
// If none of the rules above were hit, make this be global
function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}
// Rule #1
const cat = new  Animal(false, 'meow');
// console.log(raining);
// console.log(makeNoise());
const manny = {
  name: 'Manny',
  sayName: function() {
    console.log(this.name);
  }
}
const jen = {
  name: 'Jen'
};
// Rule #2
manny.sayName.call(jen);
const name = 'Emmanuel';
// Rule #3
manny.sayName()
