let count: number | void;
count = 1;

let obj: {} | null = null;

obj = {
  name: 'Владимир',
  age: 39,
};

const logger = (id: string | number): void => {
  if (typeof id === 'string') {
    console.log('id: ', id);
  } else {
    console.log('id: ', id);
  }
};

const loggerObj = (obj: { a: number } | { b: number }) => {
  if ('a' in obj) {
    obj.a;
  } else {
    obj.b;
  }
};

// const loggerError = (err: string[] | string | Error) => {
//   if (Array.isArray(err)) {
//     for (const str of err)
//     console.log('str: ', str);
//   }else if (err instanceof Error) {
//     console.log('err: ', err.message);
//   } else {
//     console.log(err);
//   }
// };

const loggerError = (err: string): never => {
  throw new Error(err);
};

const hole: null = null;
const vacuum: undefined = undefined;
