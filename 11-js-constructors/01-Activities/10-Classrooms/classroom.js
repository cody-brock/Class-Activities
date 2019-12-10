const Student = require("./student.js")

const Classroom = function(professor, roomNum) {
    this.studentArr = [];
    this.numStudents = 0;
    this.professor = professor;
    this.roomNum = roomNum;
}

Classroom.prototype.addStudent = function(name, subject, gpa) {
    this.studentArr.push(new Student(name, subject, gpa))
}

module.exports = Classroom;