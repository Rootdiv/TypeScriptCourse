import { product } from './modules/product';
import { calcTotalPrice } from './modules/calc';

const title: string = 'Квадрокоптер';
const price: number = 5000;
const count: number = 5;
const arrived: boolean = false;

const result = calcTotalPrice(product);

console.log(result);

const city: string[] = ['Варшава', 'Вильнюс', 'Рига'];
const counter: number[] = [25, 14, 74, 12];

counter.push(15);
city.push('Таллин');

const rote = city.filter(item => item !== 'Варшава')
  .map(item => item.toUpperCase())
  .reduce((acc, item) => acc + '->' + item);

console.log('rote: ', rote);

// const arr: (number | string | boolean)[] = [15, 'react', true];
const arr: readonly [number, string, boolean] = [15, 'react', true];

console.log('arr: ', arr);

const arrObj: {
  name: string;
  age: number;
}[] = [{ name: 'Владимир', age: 39 }, { name: 'Максим', age: 35 }]
