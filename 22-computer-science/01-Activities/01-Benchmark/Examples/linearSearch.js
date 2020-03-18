// Benchmark is a library that times
var Benchmark = require("benchmark");
var generate = require("../shared/generate");


// Generate an array of the given length.
var length = 100000000;
var stuff = generate(length);
var randomValue = stuff[Math.ceil(Math.random() * length)];

// A "suite" is a series of code snippets you
//   want to execute and time.
var suite = new Benchmark.Suite();

suite
// Add the function 'linearSearch' to the suite.
  .add("Linear Search", function linearSearch() {
    for (var i = 0; i < stuff.length; i += 1) {
      if (stuff[i] === randomValue) {
        return stuff[i];
      }
    }
    return false;
  })
  .add("Binary Search", function binarySearch() {
    let left = 0;
    let right = stuff.length - 1;
    while (left <= right) {
      let middle = Math.floor((left + right) / 2 );
      if (stuff[middle] === randomValue) {
        return middle;
      }
      if (stuff[middle] < randomValue) {
        left = middle + 1;
      }
      if (stuff[middle] > randomValue) {
        right = middle - 1;
      }
    }
  })
  // On 'start', run the 'start' function.
  .on("start", function start() {
    console.log("Beginning benchmark...");
  })

  // On the 'complete' event, run the 'report' function.
  .on("complete", function report() {
    // Get successful benchmark.
    var benchmark = Benchmark.filter(this, "successful")[0];

    console.log("On average, " + benchmark.name + " took " + benchmark.stats.mean + " seconds to complete.");

    var benchmarkBinary = Benchmark.filter(this, "successful")[1];
    console.log("On average, " + benchmarkBinary.name + " took " + benchmarkBinary.stats.mean + " seconds to complete.");
    //console.log('benchmark', benchmark);
  })

  // Run the test!
  .run();
