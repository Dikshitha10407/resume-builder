const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/collegeDB');
const studentSchema = new mongoose.Schema({
name: String,
age: Number,
course: String
});
const Student = mongoose.model('Student', studentSchema);
const student = new Student({
name: "Rahul",
age: 22,
course: "BCA"
});
student.save()
.then(() => console.log("Student Saved"))