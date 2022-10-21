"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondSelling = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class SecondSelling extends AbstractSelling_1.AbstractSelling {
    constructor(product, count) {
        super(product, count);
        this.countForDiscount = 3;
    }
    getPrice() {
        return this.count >= this.countForDiscount
            ? +(this.productInfo.price * this.count * (1 - 10 / 100)).toFixed(2)
            : +(this.productInfo.price * this.count);
    }
}
exports.SecondSelling = SecondSelling;
