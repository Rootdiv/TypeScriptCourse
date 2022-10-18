enum StatusStudent {
  enrollee = 'enrollee',
  student = 'student',
  graduate = 'graduate',
  bachelor = 'bachelor',
}

class Student {
  id: string = Math.random().toString(32).substring(2, 6) + Date.now().toString().substring(9);
  status: StatusStudent = StatusStudent.enrollee;
  createAt: Date = new Date();
  updateAt?: Date;
  name: string;
  course?: string;
  age?: number;
  _module: number = 0;

  constructor(name: string);
  constructor(name: string, course: string);
  constructor(name: string, age: number);
  constructor(name: string, course: string, age: number);
  constructor(name: string, courseOrAge?: string | number, age?: number) {
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

  set module(module: number) {
    this._module = module;
    this.updateAt = new Date();
  }

  changeStatus(status: StatusStudent): void {
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
