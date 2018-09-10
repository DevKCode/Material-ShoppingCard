import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../product';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productItem: Product[] = [
    new Product(1, 'Laptop', 750, ''),
    new Product(2, 'Car', 1550, ''),
    new Product(3, 'Tv', 500, ''),
    new Product(4, 'Ipad', 950, ''),
  ];

  @Output() cardUpdated = new EventEmitter<object>();
  @Output() devOutput = new EventEmitter<object>();
  constructor() {}

  ngOnInit(): void {}

  emittingProduct(event) {
    console.log(event.target.getAttribute('id'));
    const index = event.target.getAttribute('id');
    this.devOutput.emit({
      productId : this.productItem[index].id,
      productName: this.productItem[index].name,
      productPrice: this.productItem[index].price
    });
  }
  onCartUpdated(event) {

     const productId = event.target.getAttribute('id');
     console.log(productId);
     const index = 1;
        console.log(this.productItem[1]);

     this.cardUpdated.emit({
       productId : '1',
       productName: 'Lap',
       productPrice: '750'
     });
  }
}
