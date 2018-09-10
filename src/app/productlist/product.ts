export class Product {
 public id: number;
 public name: string;
 public price: number;
 public imageUrl: string;
 public storage: number;

 /**
  *
  */
 constructor(id: number, name: string, price: number, imgUrl: string ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imgUrl;
 }
}
