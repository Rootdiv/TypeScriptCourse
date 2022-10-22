{
  //Утилитарные типы

  interface Goods {
    id: number;
    title: string;
    count?: number;
    readonly price: number;
  }

  type partialGoods = Partial<Goods>;

  type requiredGoods = Required<Goods>;

  type readonlyGoods = Readonly<Goods>;

  type RRGoods = Required<Readonly<Goods>>;

  const title = ['book', 'pen', 'pencil'] as const;

  type categoryTypes = typeof title[number];

  type recordGoods = Record<categoryTypes, Goods>;

  const listGoods: recordGoods = {
    book: {
      id: 321313323,
      price: 5000,
      title: 'book',
    },
    pen: {
      id: 1354535456,
      title: 'pen',
      count: 15,
      price: 1000,
    },
    pencil: {
      id: 1354535456,
      title: 'pen',
      count: 15,
      price: 1000,
    },
  };

  type omitGoods = Omit<Goods, 'id'>;

  type pickGoods = Pick<Goods, 'title' | 'price'>;

  const getGoods = (): Promise<Goods[]> => fetch('https://api.com').then((response: Response) => response.json());

  type P = ReturnType<typeof getGoods>;
  // type R = Awaited<P>;
  type R = Awaited<ReturnType<typeof getGoods>>;

  // const getGoods = ({ title, price, count }: omitGoods): Goods => ({
  // const getGoods = (title: string, price: number, count: number): Goods => ({
  //   id: Math.floor(Math.random() * 10e8),
  //   title,
  //   price,
  //   count,
  // });

  // type goods = ReturnType<typeof getGoods>;

  // type parameter = Parameters<typeof getGoods>[2]

  // const goodsRes = getGoods({
  //   title: 'battery',
  //   price: 200,
  //   count: 200,
  // });
  // console.log('goodsRes: ', goodsRes);
}
