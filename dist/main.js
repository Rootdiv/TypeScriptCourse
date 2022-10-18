"use strict";
var StatusStudent;
(function (StatusStudent) {
    StatusStudent["enrollee"] = "enrollee";
    StatusStudent["student"] = "student";
    StatusStudent["graduate"] = "graduate";
    StatusStudent["bachelor"] = "bachelor";
})(StatusStudent || (StatusStudent = {}));
class Student {
    id = Math.random().toString(32).substring(2, 6) + Date.now().toString().substring(9);
    status = StatusStudent.enrollee;
    createAt = new Date();
    updateAt;
    name;
    course;
    age;
    _module = 0;
    constructor(name, courseOrAge, age) {
        this.name = name;
        if (typeof courseOrAge === 'string') {
            this.course = courseOrAge;
            this.changeStatus(StatusStudent.student);
        }
        if (typeof courseOrAge === 'number') {
            this.age = courseOrAge;
        }
        if (age) {
            this.age = age;
        }
    }
    // get info(): string {
    //   return `${this.name} учится на курсе ${this.course}, на модуле ${this._module}`;
    // }
    set module(module) {
        this._module = module;
        this.updateAt = new Date();
    }
    changeStatus(status) {
        this.status = status;
        this.updateAt = new Date();
    }
}
const student1 = new Student('Пётр');
console.log('student1: ', student1);
const student2 = new Student('Дмитрий', 'Frontend');
console.log('student2: ', student2);
// console.log(student.info);
const student3 = new Student('Артур', 18);
console.log('student3: ', student3);
const student4 = new Student('Генадий', 'JS', 28);
console.log('student4: ', student4);
