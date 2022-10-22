import { Users } from './AbstractUsers';
import Person from './Person';

interface Employee extends Person {
  id: number;
  post: string;
}

export class Employees extends Users<Employee> {}
