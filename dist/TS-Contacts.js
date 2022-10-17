"use strict";
const isUser = (val) => 'group' in val;
const persons = [
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
const logPerson = (person) => {
    let information;
    if (!isUser(person)) {
        information = person.role;
    }
    else {
        information = person.group;
    }
    console.log(`${person.name}, ${person.age}, ${information}`);
};
persons.forEach(logPerson);
