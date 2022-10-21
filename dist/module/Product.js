"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(product, price) {
        this.product = product;
        this.price = price;
    }
    set productChange(newProduct) {
        this.product = newProduct;
    }
    set priceChange(newPrice) {
        this.price = newPrice;
    }
    get productInfo() {
        return this.product;
    }
    get priceInfo() {
        return this.price;
    }
}
exports.Product = Product;
