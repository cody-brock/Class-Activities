var Classroom = require("./classroom.js");

var codyClass = new Classroom("Cody", 28);

codyClass.addStudent("Benjamin", "math", 3.6)
codyClass.addStudent("Carole", "Science", 4.0)

console.log(codyClass)