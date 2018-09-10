

export class Cart {
  public id: number;
  public name: string;
  public quantity: number;
  public price: number;
  public total: number;

  constructor(id: number, name: string, quantity: number, price: number, total: number) {
      this.id = id;
      this.name = name;
      this.quantity = quantity;
      this.price = price;
      this.total = total;
  }

}
