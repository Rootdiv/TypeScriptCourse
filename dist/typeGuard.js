"use strict";
const isAnimal = (val) => 'habitat' in val;
const handle = (val) => {
    if (isAnimal(val)) {
        val.family;
    }
    else {
        val.home;
    }
};
// const cat = {
//   name: 'Стейси',
//   age: 16,
//   breed: 'siberian cat',
//   voice: 'meow',
// };
// const animalToPet = (animal: animal, home: string, nameOwner: string): pet => ({
//   name: animal.name,
//   home,
//   owner: {
//     firstname: nameOwner,
//   },
// });
// const myCat: pet = animalToPet(cat, 'Малиновая 1', 'Владимир');
// console.log('myCat: ', myCat);
// const n = 10;
// const s: string = n.toString(n);
// const str = 'ts';
// const num1: number = +str;
// const num2: number = parseInt(str);
// const is1: boolean = !str;
// const is2: boolean = !!str;
