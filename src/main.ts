interface Animal {
  name: string;
  age: number;
}

interface Genius {
  family: string;
  breed: string;
}

interface AnimalWithGenius extends Animal, Genius {
  id: number;
}

const cat: AnimalWithGenius = {
  id: 24,
  family: 'felidae',
  name: 'Стейси',
  age: 16,
  breed: 'Siberian cat',
};

console.log('cat: ', cat);
