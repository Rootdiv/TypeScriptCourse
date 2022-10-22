"use strict";
class Job {
    constructor(role, salary) {
        this._role = role;
        this._salary = salary;
    }
    get salaryInfo() {
        return this._salary;
    }
    work(personName) {
        console.log(`${personName} сейчас работает как ${this._role}`);
    }
}
class Person {
    constructor(name, job) {
        this._name = name;
        this._job = job;
    }
    set jobChange(newJob) {
        this._job = newJob;
    }
    getSalary() {
        return this._job.salaryInfo;
    }
    work() {
        this._job.work(this._name);
    }
}
const mover = new Job('Грузчик', 100000);
const driver = new Job('Водитель', 150000);
const manager = new Job('Менеджер', 250000);
const personMover = new Person('Степан', mover);
const personDriver = new Person('Фёдор', driver);
const personManager = new Person('Серафим', manager);
console.log('personDriver: ', personMover);
console.log('Зарплата: ', personMover.getSalary());
console.log(personMover.work());
console.log('personDriver: ', personDriver);
console.log('Зарплата: ', personDriver.getSalary());
console.log(personDriver.work());
console.log('personDriver: ', personManager);
console.log('Зарплата: ', personManager.getSalary());
console.log(personManager.work());
personMover.jobChange = driver;
personDriver.jobChange = mover;
personManager.jobChange = new Job('Директор', 300000);
console.log('personDriver: ', personMover);
console.log('Новая зарплата: ', personMover.getSalary());
console.log(personMover.work());
console.log('personDriver: ', personDriver);
console.log('Новая зарплата: ', personDriver.getSalary());
console.log(personDriver.work());
console.log('personDriver: ', personManager);
console.log('Новая зарплата: ', personManager.getSalary());
console.log(personManager.work());
