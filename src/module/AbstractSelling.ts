import { Product } from './Product';

export abstract class AbstractSelling {
  product: Product;
  count: number;

  constructor(product: Product, count: number) {
    this.product = product;
    this.count = count;
  }

  set productChange(product: Product) {
    this.product = product;
  }

  set countChange(newCount: number) {
    this.count = newCount;
  }

  get productInfo(): Product {
    return this.product;
  }

  get countInfo(): number {
    return this.count;
  }

  abstract getPrice(): number;

  compare(a: AbstractSelling, b: AbstractSelling): number {
    if (a.getPrice() > b.getPrice()) return 1;
    if (a.getPrice() < b.getPrice()) return -1;
    return 0;
  }
}
