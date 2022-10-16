type User = {
  name: string;
  age: number;
  group: string;
};

const persons: User[] = [
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
    age: 40,
    group: 'JavaScript-разработчик',
  },
];

const logPerson = (user: User) => {
  console.log(`${user.name}, ${user.age}`);
};

console.log('Users:');

persons.forEach(logPerson);
