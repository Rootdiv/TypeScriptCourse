import { Locale } from './locale';

const translate = (lang: Locale, text: string): string => {
  // text переводим
  return text;
};
translate(Locale.EN, 'text');
translate(Locale.RU, 'текст');

console.log('Locale: ', Locale);

const enum TypeUser {
  admin = 'admin',
  moderator = 'moderator',
  user = 'user',
}

console.log('TypeUser: ', TypeUser['moderator']);

const enum statusCode {
  SUCCESS = 'success',
  PROCESS = 'process',
  FAILED = 'failed',
}

const res = {
  message: 'Успех',
  statusCode: statusCode.SUCCESS,
};

if (res.statusCode === statusCode.PROCESS) {
  // preloader
}
if (res.statusCode === statusCode.SUCCESS) {
  // render
}
if (res.statusCode === statusCode.FAILED) {
  // err
}

// {
//   type httpMethod = 'GET' | 'POST';
//   const apiService = (url: string, method: httpMethod) => fetch(url, { method });
//   // let method: 'POST' = 'PORT'; // В TypeScript 4.8 не работает.
//   const obj: {
//     method: 'POST';
//   } = {
//     method: 'POST',
//   };
//   apiService('https://site.com', obj.method);
// }
