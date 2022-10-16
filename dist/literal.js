"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const locale_1 = require("./locale");
const translate = (lang, text) => {
    // text переводим
    return text;
};
translate(locale_1.Locale.EN, 'text');
translate(locale_1.Locale.RU, 'текст');
console.log('Locale: ', locale_1.Locale);
console.log('TypeUser: ', "moderator" /* TypeUser['moderator'] */);
const res = {
    message: 'Успех',
    statusCode: "success" /* statusCode.SUCCESS */,
};
if (res.statusCode === "process" /* statusCode.PROCESS */) {
    // preloader
}
if (res.statusCode === "success" /* statusCode.SUCCESS */) {
    // render
}
if (res.statusCode === "failed" /* statusCode.FAILED */) {
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
