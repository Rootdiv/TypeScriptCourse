interface User {
  name: string;
  age: number;
  group?: string;
}

interface Admin {
  name: string;
  age: number;
  role?: string;
}

type Person = User | Admin;

const isUser = (val: User | Admin): val is User => 'group' in val;

const persons: Person[] = [
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    name: 'Роман Смирнов',
    age: 30,
    group: 'React-разработчик',
  },
  {
    name: 'Ульяна Никитина',
    age: 25,
    group: 'Дизайнер',
  },
  {
    name: 'Владислав Горлов',
    age: 35,
    group: 'JavaScript-разработчик',
  },
  {
    name: 'Марк Кузнецов',
    age: 40,
    role: 'Администратор',
  },
];

const logPerson = (person: Person) => {
  let information: string | undefined;
  if (!isUser(person)) {
    information = person.role;
  } else {
    information = person.group;
  }
  console.log(`${person.name}, ${person.age}, ${information}`);
};

persons.forEach(logPerson);
