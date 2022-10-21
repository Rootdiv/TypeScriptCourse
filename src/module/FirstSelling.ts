import { AbstractSelling } from './AbstractSelling';
import { Product } from './Product';

export class FirstSelling extends AbstractSelling {
  constructor(product: Product, count: number) {
    super(product, count);
  }

  override getPrice(): number {
    return +((this.productInfo.price - 10) * this.count).toFixed(2);
  }
}
