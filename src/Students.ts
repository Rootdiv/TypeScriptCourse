import { Users } from './AbstractUsers';
import Person from './Person';

interface Student extends Person {
  id: number;
  year: number;
  specialty: string;
}

export class Students extends Users<Student> {}
