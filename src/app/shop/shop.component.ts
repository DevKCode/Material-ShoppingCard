import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  cartTotal = 0;
  cartItems: Cart[] = [];
  constructor() {}

  ngOnInit() {

  }

  onCartItemDeleted(productData: { productId: number }) {
    const index = this.cartItems.findIndex(
      ele => ele.id === productData.productId
    );
    this.cartItems.splice(index, 1);
    this.updateCartTotal();
  }
  onCartItemChanged(productData: { productId: number }) {
    this.updateCartTotal();
  }

  getUpdatedOutput(data: any) {
    console.log('received output');
    console.log(data);
  }

  getUpdatedInfo(productData: {
    productId: number;
    productName: string;
    productPrice: number;
  }) {
    console.log('received');
     const index = this.cartItems.findIndex(item => item.id === productData.productId);

       if (index ===  -1)  {
         this.cartItems.push({
          id: productData.productId,
          name: productData.productName,
          quantity: 1,
          price: productData.productPrice,
          total: productData.productPrice * 1
         });
       } else {
        this.cartItems[index].id = productData.productId;
        this.cartItems[index].name = productData.productName;
        this.cartItems[index].quantity++;
        this.cartItems[index].price = productData.productPrice;
        this.cartItems[index].total = this.cartItems[index].price * this.cartItems[index].quantity;
       }



    this.updateCartTotal();
  }
  updateCartTotal( ) {
    let total = 0;
    this.cartItems.map(ele => total += ele.quantity * ele.price);
    this.cartTotal = total;

  }
}
