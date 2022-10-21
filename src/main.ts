import { Product } from './module/Product';
import { FirstSelling } from './module/FirstSelling';
import { SecondSelling } from './module/SecondSelling';
import { AbstractSelling } from './module/AbstractSelling';

const cup: Product = new Product('Чашка', 500);
const monitor: Product = new Product('Монитор', 25000);
const chair: Product = new Product('Стул', 8000);
const table: Product = new Product('Стол', 12000);
const car: Product = new Product('Автомобиль', 2000000);
const house: Product = new Product('Дом', 15000000);
const keyboard: Product = new Product('Клавиатура', 2000);
const mouse: Product = new Product('Мышь', 500);

const firstSell = new FirstSelling(cup, 10);
const secondSell = new FirstSelling(monitor, 5);
const thirdSell = new FirstSelling(chair, 15);
const fourthSell = new FirstSelling(table, 10);
const fifthSell = new SecondSelling(car, 2);
const sixthSell = new SecondSelling(house, 4);
const seventhSell = new SecondSelling(keyboard, 20);
const eighthSell = new SecondSelling(mouse, 25);

const productsSells: AbstractSelling[] = [
  firstSell,
  secondSell,
  thirdSell,
  fourthSell,
  fifthSell,
  sixthSell,
  seventhSell,
  eighthSell,
];

productsSells.sort((a, b) => {
  if (a.getPrice() > b.getPrice()) return 1;
  if (a.getPrice() < b.getPrice()) return -1;
  return 0;
});

console.log(productsSells);
