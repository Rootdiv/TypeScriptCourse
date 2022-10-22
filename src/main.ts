class HttpResponse<D, E> {
  protected _success: boolean;
  protected _data?: D;
  protected _code?: E;

  constructor(success: boolean, data?: D, error?: E) {
    this._success = success;
    if (data) {
      this._data = data;
    }
    if (error) {
      this._code = error;
    }
  }
}

const responseToken = new HttpResponse<number, string>(true, 456465565456);
const responseUser = new HttpResponse<string, string>(true, 'Генадий Иванов');

// type filterArray = <T>(arr: T[], exclude: T[]) => T[];
// const filterArr: filterArray = (arr, exclude) => arr.filter(item => !exclude.includes(item));
// //const filterArr = <T>(arr: T[], exclude: T[]): T[] => arr.filter(item => !exclude.includes(item));

// const result = filterArr<number>([1, 2, 3, 4, 5], [2, 4]);
// console.log('result: ', result);

// interface HttpResponseError {
//   success: false;
//   error: string;
// }

// interface HttpResponseSuccess<T> {
//   success: true;
//   data: T;
// }

// type HttpResponse<T> = HttpResponseError | HttpResponseSuccess<T>;

// interface product {
//   id: number;
//   title: string;
//   count: number;
// }

// interface person {
//   name: string;
//   post: string;
// }

// const response: HttpResponse<product[]> = {
//   success: true,
//   data: [
//     {
//       id: 21,
//       title: 'Капуста',
//       count: 30,
//     },
//     {
//       id: 12,
//       title: 'Морковь',
//       count: 50,
//     },
//   ],
// };

// const response2: HttpResponse<person[]> = {
//   success: true,
//   data: [
//     {
//       name: 'Иван',
//       post: 'Кладовщик',
//     },
//     {
//       name: 'Пётр',
//       post: 'Сторож',
//     },
//   ],
// };

// const response3: HttpResponse<string> = {
//   success: true,
//   data: 'Заказ оформлен, номер заказа №23123',
// };

// const log = <type>(val: type): type => {
//   console.log(val);
//   return val;
// };

// log<string>('строка');
// log(5);

// const logFoo = (val: string | number): string | number => {
//   console.log(val);
//   return val;
// };

// const c = logFoo(5);
// const d = logFoo('строка');

// const log = <T, B>(val: T, val2: B): T => {
//   console.log(val);
//   console.log(val2);
//   return val;
// };

// log<string, number>('строка', 10);
// log(5, 15);

// function log2<T>(val: T): T {
//   console.log(val);
//   return val;
// }

// log2<string>('строка');
// log2<boolean>(!5);
