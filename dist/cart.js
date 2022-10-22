"use strict";
const filter = (arr, key, value) => arr.filter((item) => item[key] === value);
const categories = ['notebook', 'e-book', 'smartphone', 'monitor'];
class Cart {
    constructor() {
        this.goods = [];
    }
    add(item) {
        this.goods.push(item);
    }
    get(title) {
        return this.goods.find(item => item.title === title) ?? null;
    }
    get totalPrice() {
        return this.goods.reduce((acc, item) => acc + item.price * item.count, 0);
    }
}
class TechCart extends Cart {
}
const techCart = new TechCart();
techCart.add({
    title: 'Монитор BenQ BL2783, 1920x1080, TN, чёрный',
    price: 30000,
    count: 1,
    description: 'ВепО В12783 позаботится о пользователях',
    type: 'monitor',
});
techCart.add({
    title: 'Ноутбук ASUS TUF Gaming A17 FX706IC-HX015',
    price: 110000,
    count: 1,
    description: 'Если компьютерные игры ваша стихия - остановите выбор на ноутбуке ASUS TUF Gaming A17',
    type: 'notebook',
});
techCart.add({
    title: 'Электронная книга Ritmix RBK-616',
    price: 5000,
    count: 2,
    description: 'Ritmix RBK-616 для тех кто предпочитает активный образ жизни',
    type: 'e-book',
});
const res = filter(techCart.goods, 'type', 'e-book');
console.log(res);
const goods = {
    title: 'Ноутбук ASUS TUF Gaming A17 FX706IC-HX015',
    price: 110000,
    count: 1,
    description: 'Если компьютерные игры ваша стихия - остановите выбор на ноутбуке ASUS TUF Gaming A17',
    type: 'notebook',
};
const goods2 = {
    title: 'Электронная книга Ritmix RBK-616',
    price: 5000,
    count: 2,
    description: 'Ritmix RBK-616 для тех кто предпочитает активный образ жизни',
    type: 'e-book',
};
const keys = 'type';
