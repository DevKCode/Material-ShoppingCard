import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from '../cart';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {
  @Input()
  cartItem: Cart;

  @Output()
  cartItemDeleted = new EventEmitter<{
    productId: number;
  }>();

  @Output()
  cartItemChanged = new EventEmitter<{
    productId: number;
  }>();

  constructor() {}

  ngOnInit() {}

  onCartItemDeleted(event) {
    const id = event.target.getAttribute('id');
    this.cartItemDeleted.emit({
      productId: id
    });
  }

  onCartItemChanged(event)  {
    const id = event.target.getAttribute('id');
    this.cartItemChanged.emit({
      productId: id
    });
  }

}
