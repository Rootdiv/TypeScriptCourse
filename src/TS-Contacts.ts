type User = {
  name: string;
  age: number;
  group?: string;
};

type Admin = {
  name: string;
  age: number;
  role: string;
};

type Person = User | Admin;

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

const logPerson = (user: User) => {
  console.log(`${user.name}, ${user.age}`);
};

persons.forEach(logPerson);
