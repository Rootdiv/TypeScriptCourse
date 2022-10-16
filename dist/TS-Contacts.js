"use strict";
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
const logPerson = (user) => {
    console.log(`${user.name}, ${user.age}`);
};
persons.forEach(logPerson);
