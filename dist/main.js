"use strict";
var StatusStudent;
(function (StatusStudent) {
    StatusStudent["enrollee"] = "enrollee";
    StatusStudent["student"] = "student";
    StatusStudent["graduate"] = "graduate";
    StatusStudent["bachelor"] = "bachelor";
})(StatusStudent || (StatusStudent = {}));
class Person {
    constructor(name, age) {
        this.name = name;
        this.id = Math.random().toString(32).substring(2, 6) + Date.now().toString().substring(9);
        this.createAt = new Date();
        if (typeof age === 'number') {
            this.age = age;
        }
    }
    getInfo() {
        if (this.age) {
            return `${this.name}, возраст ${this.age}`;
        }
        return this.name;
    }
}
class Student extends Person {
    constructor(name, courseOrAge, age) {
        let ageOrUndefined;
        if (typeof courseOrAge === 'number') {
            ageOrUndefined = courseOrAge;
        }
        if (age) {
            ageOrUndefined = age;
        }
        super(name, ageOrUndefined);
        this.name = name;
        this.status = StatusStudent.enrollee;
        this._module = 0;
        if (typeof courseOrAge === 'string') {
            this.course = courseOrAge;
            this.changeStatus(StatusStudent.student);
        }
        Student.count++;
    }
    getInfo() {
        const info = super.getInfo();
        if (this.course) {
            return `${info} учится на курсе ${this.course}`;
        }
        return info;
    }
    changeUpdateDate() {
        this.updateAt = new Date();
    }
    set module(module) {
        this._module = module;
        this.changeUpdateDate();
    }
    changeStatus(status) {
        this.status = status;
        this.changeUpdateDate();
    }
    changeInfo(courseOrModule, module) {
        if (typeof courseOrModule === 'string') {
            this.course = courseOrModule;
        }
        if (typeof courseOrModule === 'number') {
            this.module = courseOrModule;
        }
        if (module) {
            this.module = module;
        }
        this.changeUpdateDate();
    }
    static createStudents(list, course) {
        return list.map(name => new Student(name, course));
    }
    static createStudentFromPerson(person, course) {
        if (person.age) {
            if (course) {
                return new Student(person.name, course, person.age);
            }
            return new Student(person.name, person.age);
        }
        if (course) {
            return new Student(person.name, course);
        }
        return new Student(person.name);
    }
    logger() {
        console.log(this);
    }
}
Student.school = 'METHED';
(() => {
    Student.count = 0;
})();
const student1 = new Student('Дмитрий', 'Frontend', 16);
student1.changeInfo('Web');
console.log('student1: ', student1.getInfo());
const students = Student.createStudents(['Иван', 'Алексей', 'Ринат'], 'React');
console.log('students: ', students);
const student3 = new Student('Артур', 18);
student3.changeInfo(2);
console.log('student3: ', student3);
const student4 = new Student('Генадий', 'JS', 28);
student4.changeInfo(3);
console.log('student4: ', student4);
console.log('count: ', Student.count);
