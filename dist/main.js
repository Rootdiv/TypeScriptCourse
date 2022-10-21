"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./module/Product");
const FirstSelling_1 = require("./module/FirstSelling");
const SecondSelling_1 = require("./module/SecondSelling");
const cup = new Product_1.Product('Чашка', 500);
const monitor = new Product_1.Product('Монитор', 25000);
const chair = new Product_1.Product('Стул', 8000);
const table = new Product_1.Product('Стол', 12000);
const car = new Product_1.Product('Автомобиль', 2000000);
const house = new Product_1.Product('Дом', 15000000);
const keyboard = new Product_1.Product('Клавиатура', 2000);
const mouse = new Product_1.Product('Мышь', 500);
const firstSell = new FirstSelling_1.FirstSelling(cup, 10);
const secondSell = new FirstSelling_1.FirstSelling(monitor, 5);
const thirdSell = new FirstSelling_1.FirstSelling(chair, 15);
const fourthSell = new FirstSelling_1.FirstSelling(table, 10);
const fifthSell = new SecondSelling_1.SecondSelling(car, 2);
const sixthSell = new SecondSelling_1.SecondSelling(house, 4);
const seventhSell = new SecondSelling_1.SecondSelling(keyboard, 20);
const eighthSell = new SecondSelling_1.SecondSelling(mouse, 25);
const productsSells = [
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
    if (a.getPrice() > b.getPrice())
        return 1;
    if (a.getPrice() < b.getPrice())
        return -1;
    return 0;
});
console.log(productsSells);
