interface Goods {
  title: string;
  count: number;
  price: number;
}

type KeysOfGoods = keyof Goods;

// const filter = (arr: Goods[], key: KeysOfGoods, value: string | number) =>
// const filter = (arr: Goods[], key: KeysOfGoods, value: Goods[KeysOfGoods]) =>
const filter = <T, K extends keyof T>(arr: T[], key: K, value: T[K]) => arr.filter((item: T) => item[key] === value);

const categories = ['notebook', 'e-book', 'smartphone', 'monitor'] as const;

type categoryTypes = typeof categories[number];

abstract class Cart<T extends Goods> {
  public goods: T[] = [];

  public add(item: T): void {
    this.goods.push(item);
  }

  public get(title: string): T | null {
    return this.goods.find(item => item.title === title) ?? null;
  }

  public get totalPrice(): number {
    return this.goods.reduce((acc, item) => acc + item.price * item.count, 0);
  }
}

interface TechGoods {
  title: string;
  count: number;
  price: number;
  type: categoryTypes;
  description: string;
}

class TechCart extends Cart<TechGoods> {}

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

const goods: TechCart['goods'][number] = {
  title: 'Ноутбук ASUS TUF Gaming A17 FX706IC-HX015',
  price: 110000,
  count: 1,
  description: 'Если компьютерные игры ваша стихия - остановите выбор на ноутбуке ASUS TUF Gaming A17',
  type: 'notebook',
};

const goods2: typeof goods = {
  title: 'Электронная книга Ritmix RBK-616',
  price: 5000,
  count: 2,
  description: 'Ritmix RBK-616 для тех кто предпочитает активный образ жизни',
  type: 'e-book',
};

type keyOfGoods = keyof typeof goods;

const keys: keyOfGoods = 'type';

// console.log(techCart.totalPrice);

// console.log(techCart.get('Ноутбук ASUS TUF Gaming A17 FX706IC-HX015'));

// const getCountGoods = <T extends Goods>(arr: T[], title: string): number => {
//   const goods = arr.find(item => item.title === title);
//   return goods?.count ?? 0;
// };

// const goods: Goods[] = [
//   { title: 'Ноутбук', count: 10 },
//   { title: 'Планшет', count: 15 },
//   { title: 'Смартфон', count: 20 },
// ];

// const countP = getCountGoods(goods, 'Планшет');
// console.log('countP: ', countP);
// const countN = getCountGoods(goods, 'Пылесос');
// console.log('countN: ', countN);
