export class Product {
  product: string;
  price: number;

  constructor(product: string, price: number) {
    this.product = product;
    this.price = price;
  }

  set productChange(newProduct: string) {
    this.product = newProduct;
  }

  set priceChange(newPrice: number) {
    this.price = newPrice;
  }

  get productInfo(): string {
    return this.product;
  }

  get priceInfo(): number {
    return this.price;
  }
}
