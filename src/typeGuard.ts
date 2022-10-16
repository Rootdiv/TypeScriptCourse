type animal = {
  type: 'animal';
  name: string;
  age: number;
  habitat: string;
  family: string;
};

type pet = {
  type: 'pet';
  name: string;
  home: string;
  age: string;
  breed: string;
  owner: {
    firstname: string;
  };
};

const isAnimal = (val: animal | pet): val is animal => 'habitat' in val;

const handle = (val: animal | pet) => {
  if (isAnimal(val)) {
    val.family;
  } else {
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
