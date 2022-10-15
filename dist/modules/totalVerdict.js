"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalVerdict = void 0;
const totalVerdict = (car) => {
    const sumRating = car.rating.reduce((acc, item) => {
        console.log(acc, item);
        return item[1] + acc;
    }, 0);
    const verdict = sumRating / car.rating.length;
    return verdict;
};
exports.totalVerdict = totalVerdict;
