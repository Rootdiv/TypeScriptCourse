import { AbstractSelling } from './AbstractSelling';
import { Product } from './Product';

export class SecondSelling extends AbstractSelling {
  countForDiscount: number = 3;

  constructor(product: Product, count: number) {
    super(product, count);
  }

  override getPrice(): number {
    return this.count >= this.countForDiscount
      ? +(this.productInfo.price * this.count * (1 - 10 / 100)).toFixed(2)
      : +(this.productInfo.price * this.count);
  }
}
