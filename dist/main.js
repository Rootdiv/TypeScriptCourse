"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./modules/product");
const calc_1 = require("./modules/calc");
const title = 'Квадрокоптер';
const price = 5000;
const count = 5;
const arrived = false;
const result = (0, calc_1.calcTotalPrice)(product_1.product);
console.log(result);
const city = ['Варшава', 'Вильнюс', 'Рига'];
const counter = [25, 14, 74, 12];
counter.push(15);
city.push('Таллин');
const rote = city.filter(item => item !== 'Варшава')
    .map(item => item.toUpperCase())
    .reduce((acc, item) => acc + '->' + item);
console.log('rote: ', rote);
// const arr: (number | string | boolean)[] = [15, 'react', true];
const arr = [15, 'react', true];
console.log('arr: ', arr);
const arrObj = [{ name: 'Владимир', age: 39 }, { name: 'Максим', age: 35 }];
