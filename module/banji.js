var teacher = require('./teacher')
var student = require('./student')

function add(teacher_name,students){
    teacher.add(teacher_name)

    students.forEach(function(item ,index){
        student.add(item)
    })
}

exports.add = add //return module instance
//module.exports = add //return special module