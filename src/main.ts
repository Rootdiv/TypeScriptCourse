enum StatusStudent {
  enrollee = 'enrollee',
  student = 'student',
  graduate = 'graduate',
  bachelor = 'bachelor',
}

abstract class Person {
  age?: number;
  private id: string = Math.random().toString(32).substring(2, 6) + Date.now().toString().substring(9);
  private createAt: Date = new Date();
  protected updateAt?: Date;

  constructor(name: string);
  constructor(name: string, age: number | undefined);
  constructor(public readonly name: string, age?: number | undefined) {
    if (typeof age === 'number') {
      this.age = age;
    }
  }

  getInfo(): string {
    if (this.age) {
      return `${this.name}, возраст ${this.age}`;
    }
    return this.name;
  }

  abstract logger(): void;
}

class Student extends Person {
  static readonly school: string = 'METHED';
  static count: number;
  status: StatusStudent = StatusStudent.enrollee;
  course?: string;
  _module: number = 0;

  constructor(name: string);
  constructor(name: string, course: string);
  constructor(name: string, age: number);
  constructor(name: string, course: string, age: number);
  constructor(public readonly name: string, courseOrAge?: string | number, age?: number) {
    let ageOrUndefined: number | undefined;
    if (typeof courseOrAge === 'number') {
      ageOrUndefined = courseOrAge;
    }

    if (age) {
      ageOrUndefined = age;
    }

    super(name, ageOrUndefined);
    if (typeof courseOrAge === 'string') {
      this.course = courseOrAge;
      this.changeStatus(StatusStudent.student);
    }

    Student.count++;
  }

  override getInfo(): string {
    const info = super.getInfo();
    if (this.course) {
      return `${info} учится на курсе ${this.course}`;
    }
    return info;
  }
  // get info(): string {
  //   return `${this.name} учится на курсе ${this.course}, на модуле ${this._module}`;
  // }
  changeUpdateDate(): void {
    this.updateAt = new Date();
  }

  set module(module: number) {
    this._module = module;
    this.changeUpdateDate();
  }

  changeStatus(status: StatusStudent): void {
    this.status = status;
    this.changeUpdateDate();
  }

  changeInfo(course: string): void;
  changeInfo(module: number): void;
  changeInfo(course: string, module: number): void;
  changeInfo(courseOrModule: string | number, module?: number): void {
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

  static createStudents(list: string[], course: string): Student[] {
    return list.map(name => new Student(name, course));
  }

  static createStudentFromPerson(person: Person): Student;
  static createStudentFromPerson(person: Person, course: string): Student;
  static createStudentFromPerson(person: Person, course?: string): Student {
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

  static {
    Student.count = 0;
  }

  logger(): void {
    console.log(this);
  }
}

// const person = new Person('Пётр', 44);
// console.log('person: ', person.getInfo());

// const studentPeter: Student = Student.createStudentFromPerson(person, 'Design');
// console.log('studentPeter: ', studentPeter);

const student1 = new Student('Дмитрий', 'Frontend', 16);
student1.changeInfo('Web');
console.log('student1: ', student1.getInfo());
// console.log(student.info);
const students = Student.createStudents(['Иван', 'Алексей', 'Ринат'], 'React');
console.log('students: ', students);

const student3 = new Student('Артур', 18);
student3.changeInfo(2);
console.log('student3: ', student3);

const student4 = new Student('Генадий', 'JS', 28);
student4.changeInfo(3);
console.log('student4: ', student4);

console.log('count: ', Student.count);
