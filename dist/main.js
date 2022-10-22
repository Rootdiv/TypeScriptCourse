"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Students_1 = require("./Students");
const Employees_1 = require("./Employees");
const students = new Students_1.Students();
const employees = new Employees_1.Employees();
students.add({
    id: 1,
    firstname: 'Тимофей',
    surname: 'Панов',
    age: 20,
    year: 2,
    specialty: 'Верстальщик',
});
students.add({
    id: 2,
    firstname: 'Александра',
    surname: 'Куликова',
    age: 22,
    year: 1,
    specialty: 'Дизайнер',
});
students.add({
    id: 3,
    firstname: 'Варвара',
    surname: 'Васильева',
    age: 25,
    year: 3,
    specialty: 'JavaScript разработчик',
});
students.add({
    id: 4,
    firstname: 'Эмиль',
    surname: 'Киселев',
    age: 25,
    year: 5,
    specialty: 'Frontend разработчик',
});
students.add({
    id: 5,
    firstname: 'Михаил',
    surname: 'Захаров',
    age: 27,
    year: 4,
    specialty: 'React разработчик',
});
employees.add({
    id: 1,
    firstname: 'Никита',
    surname: 'Яковлев',
    age: 30,
    post: 'Куратор',
});
employees.add({
    id: 2,
    firstname: 'Максим',
    surname: 'Алексеев',
    age: 35,
    post: 'Преподаватель',
});
console.log(students);
console.log(employees);
console.log('students.remove(4): ', students.remove(4));
console.log('students.remove(6): ', students.remove(6));
console.log(students);
console.log('Студент 3: ', students.get(3));
console.log('Студент 8: ', students.get(8));
console.log('Сотрудник 2: ', employees.get(2));
console.log('Сотрудник 5: ', employees.get(5));
console.log('Студенты');
console.log('По возрастанию', students.sorted('по возрастанию'));
console.log('По убыванию', students.sorted('по убыванию'));
console.log('Сотрудники');
console.log('По возрастанию', employees.sorted('по возрастанию'));
console.log('По убыванию', employees.sorted('по убыванию'));
