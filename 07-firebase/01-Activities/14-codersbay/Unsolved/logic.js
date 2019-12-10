// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
var firebaseConfig = {
  apiKey: "AIzaSyD0hynNWc9a6Ij5c6wPwlJPli_r2rifdXs",
  authDomain: "click-counter-4d968.firebaseapp.com",
  databaseURL: "https://click-counter-4d968.firebaseio.com",
  projectId: "click-counter-4d968",
  storageBucket: "click-counter-4d968.appspot.com",
  messagingSenderId: "613974370857",
  appId: "1:613974370857:web:e20c60a9d0d758d6ae4a38",
  measurementId: "G-HGR6XCSVKJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Assign the reference to the database to a variable named 'database'
var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    console.log(snapshot.val());

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    highPrice = snapshot.val().highPrice;
    highBidder = snapshot.val().highBidder;


    // Change the HTML to reflect the stored values
    $("#highest-price").text(highPrice);
    $("#highest-bidder").text(highBidder);


    // Print the data to the console.
    console.log("there was an update to highPrice: ", highPrice);
    console.log("there was an update to highBidder: ", highBidder);


  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $("#highest-price").text(highPrice);
    $("#highest-bidder").text(highBidder);

    // Print the data to the console.
    console.log("there was NO update to highPrice: ", highPrice);
    console.log("there was NO update to highBidder: ", highBidder);

  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  let bidderName = $("#bidder-name").val();
  let bidderPrice = Number($("#bidder-price").val());

  console.log("bidderPrice: ", bidderPrice);
  console.log("highPrice: ", highPrice)

  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      highBidder: bidderName,
      highPrice: bidderPrice
    })

    // Log the new High Price
    console.log("new High Price", highPrice)

    // // Store the new high price and bidder name as a local variable
    // let newHighPrice = highPrice;
    // let newBidderName = bidderName;

    // // Change the HTML to reflect the new high price and bidder
    // $("#highest-price").text(newHighPrice);
    // $("#highest-bidder").text(newBidderName);

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
