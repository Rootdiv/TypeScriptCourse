class Job {
  private _role: string;
  private _salary: number;

  constructor(role: string, salary: number) {
    this._role = role;
    this._salary = salary;
  }

  get salaryInfo(): number {
    return this._salary;
  }

  public work(personName: string): void {
    console.log(`${personName} сейчас работает как ${this._role}`);
  }
}

class Person {
  private _job: Job;
  private _name: string;

  constructor(name: string, job: Job) {
    this._name = name;
    this._job = job;
  }

  set jobChange(newJob: Job) {
    this._job = newJob;
  }

  getSalary(): number {
    return this._job.salaryInfo;
  }

  work(): void {
    this._job.work(this._name);
  }
}

const mover = new Job('Грузчик', 100000);
const driver = new Job('Водитель', 150000);
const manager = new Job('Менеджер', 250000);

const personMover: Person = new Person('Степан', mover);
const personDriver: Person = new Person('Фёдор', driver);
const personManager: Person = new Person('Серафим', manager);

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
