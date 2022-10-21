"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSelling = void 0;
class AbstractSelling {
    constructor(product, count) {
        this.product = product;
        this.count = count;
    }
    set productChange(product) {
        this.product = product;
    }
    set countChange(newCount) {
        this.count = newCount;
    }
    get productInfo() {
        return this.product;
    }
    get countInfo() {
        return this.count;
    }
    compare(a, b) {
        if (a.getPrice() > b.getPrice())
            return 1;
        if (a.getPrice() < b.getPrice())
            return -1;
        return 0;
    }
}
exports.AbstractSelling = AbstractSelling;
