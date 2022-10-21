class Job {
  private role: string;
  private salary: number;

  constructor(role: string, salary: number) {
    this.role = role;
    this.salary = salary;
  }

  get salaryInfo(): number {
    return this.salary;
  }

  public work(personName: string): void {
    console.log(`${personName} сейчас работает как ${this.role}`);
  }
}

class Person {
  private job: Job;
  private name: string;

  constructor(name: string, job: Job) {
    this.name = name;
    this.job = job;
  }

  set jobChange(newJob: Job) {
    this.job = newJob;
  }

  getSalary(): number {
    return this.job.salaryInfo;
  }

  work(): void {
    this.job.work(this.name);
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
