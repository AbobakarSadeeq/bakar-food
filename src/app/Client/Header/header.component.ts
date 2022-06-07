import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  numberOfItemsInCart = 0;
  subscription: Subscription;
  constructor(private _shoppingCartService: CartService) { }

  ngOnInit(): void {

    // Subscribing the Cart Items Number
    this.subscription = this._shoppingCartService.cartItemsNumber.subscribe((data: any) => {
      this.numberOfItemsInCart = data
    });

    this.cartItemFunc();
  }


  cartItemFunc(){
    if (localStorage.getItem('ProductCartData') != null){
      var cartValue: [] = JSON.parse(localStorage.getItem('ProductCartData')!);
      let quantitySum:number = 0;
      for(var gettingQuantity of cartValue){
      quantitySum = quantitySum + gettingQuantity['quantity'];
    }
      this.numberOfItemsInCart = quantitySum;
   }
  }

}
