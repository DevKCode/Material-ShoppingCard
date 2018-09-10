import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  total = 0;
  @Input() cartTotal: number;
  @Input() cartItems: Cart[];

  @Output() cartItemDeleted = new EventEmitter<{
    prouductId: number;
  }>();

  @Output() cartItemChanged = new EventEmitter<{
    prouductId: number;
  }>();

  constructor() { }

  ngOnInit() {
  }

  onCartItemDeleted(productData: {productId: number}) {
    this.cartItemDeleted.emit({
      prouductId: productData.productId
    });
   }

   onCartItemChanged(productData: {productId: number}) {
    this.cartItemChanged.emit({
      prouductId: productData.productId
    });
   }


}
