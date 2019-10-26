// Step 1:
// Use the following Audio file below:

// var audio = new Audio("raven.mp3");
var audio = new Audio("captainplanet24.mp3")

//  Step 2: do the following between the --- comments below
//  after 5 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function

// ---------------------
// CODE STEP TWO HERE
// ---------------------



// Step 3:
// Fill in the blanks to these functions.
const fiveSeconds = () => $("#time-left").html("<h2>About 10 Seconds Left!</h2>");
  
  // in the element with an id of `time-left` add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left


const tenSeconds = () => $("#time-left").html("<h2>About 5 Seconds Left!</h2>");
  // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left


const timeUp = () => {
  $("#time-left").html("<h2>Time's Up!</h2>");
  // in the element with an id of `time-left` add an h2 saying Time's Up!
  // console log done

  // The following line will play the audio file above
  audio.play();
}


setTimeout(() => (console.log("<h2>About 10 Seconds Left!</h2>")), 5000);

setTimeout(() => (console.log("<h2>About 5 Seconds Left!</h2>")), 10000);

setTimeout(() => (console.log("<h2>Time's Up!</h2>")), 15000);

setTimeout(fiveSeconds,5000);
setTimeout(tenSeconds,10000);
setTimeout(timeUp,15000);