var database = firebase.database();

var name = "";
var role = "";
var startDate = 0;
var monthlyRate = 0;


$("#submit").on("click", function(event) {
    event.preventDefault();

    name = $("#employee-name").val().trim();
    role = $("#role").val().trim();
    startDate = $("#start-date").val().trim();
    monthlyRate = $("#monthly-rate").val().trim();

    database.ref().push({
        name,
        role,
        startDate,
        monthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })

})

database.ref().on("child_added", function(snapshot) {

    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().role);
    console.log(snapshot.val().startDate);
    console.log(snapshot.val().monthlyRate);
    console.log(snapshot.val().dateAdded)

    // var date = new Date(snapshot.val().startDate);
    // console.log(date);
    // var monthsWorked = new Date(Date.now() - date);
    // console.log(monthsWorked);

    var row = $("<tr>");
    row.append($("<td>").text(snapshot.val().name))
    row.append($("<td>").text(snapshot.val().role))
    row.append($("<td>").text(snapshot.val().startDate))
    row.append($("<td>").text(snapshot.val().startDate))
    row.append($("<td>").text(snapshot.val().monthlyRate))
    row.append($("<td>").text(snapshot.val().monthlyRate))

    $("#table").append(row);

})