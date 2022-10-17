interface User {
  type: 'user';
  name: string;
  age: number;
  group: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    type: 'user',
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    type: 'user',
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    type: 'user',
    name: 'Роман Смирнов',
    age: 30,
    group: 'React-разработчик',
  },
  {
    type: 'user',
    name: 'Ульяна Никитина',
    age: 25,
    group: 'Дизайнер',
  },
  {
    type: 'user',
    name: 'Владислав Горлов',
    age: 35,
    group: 'JavaScript-разработчик',
  },
  {
    type: 'admin',
    name: 'Марк Кузнецов',
    age: 40,
    role: 'Администратор',
  },
];

const isAdmin = (person: Person): person is Admin => person.type === 'admin';

const isUser = (person: Person): person is User => person.type === 'user';

const logPerson = (person: Person) => {
  let information: string = '';
  if (isAdmin(person)) {
    information = person.role;
  }
  if (isUser(person)) {
    information = person.group;
  }
  console.log(` - ${person.name}, ${person.age}, ${information}`);
};

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log('Users:');
persons.filter(isUser).forEach(logPerson);
