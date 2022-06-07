import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartDataList: any[] = [];
  totalPrice: number = 0;
  showCheckOutButton = true;
  orderMessage = null;
  showAddress = false;


  displayModal = false;
  constructor(
    private confirmationService: ConfirmationService,
    private _shoppingCartService: CartService,
    private _route: Router,
    private _activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {


    // Used for when There is no Items inside the cart then dont show the CheckCart Button
    if (localStorage.getItem("ProductCartData") == null) {
      this.showCheckOutButton = false;
    } else {
      this.showAddress = true;
    }


    // Calling this method when this component execute
    this.gettingDataOfCart();
    this.allCartPrice();
  }

  // Total Price of Items inside the Cart
  allCartPrice() {
    let gettingLocalStorageData = JSON.parse(localStorage.getItem("ProductCartData")!);
    if (gettingLocalStorageData) {
      this.cartDataList = gettingLocalStorageData
      this.totalPrice = 0;
      for (var cartItem of this.cartDataList) {
        this.totalPrice = this.totalPrice + (cartItem.quantity * cartItem.price);

      }

    }
  }

  // Geting All Shopping Cart LocalStorage Data
  gettingDataOfCart() {
    let gettingData = JSON.parse(localStorage.getItem("ProductCartData")!);
    if (gettingData) {
      this.cartDataList = gettingData;
    }
  }

  // Updating Number of Item in Cart
  cartItemFunc() {
    if (localStorage.getItem('ProductCartData') != null) {
      var cartValue: [] = JSON.parse(localStorage.getItem('ProductCartData')!);
      let quantitySum: number = 0;
      for (var gettingQuantity of cartValue) {
        quantitySum = quantitySum + gettingQuantity['quantity'];
      }
      this._shoppingCartService.cartItemsNumber.next(quantitySum);
    }
  }




  // Adding the Product Quantity or change or Edit the Quantity
  addingProductQuantity(cartItemData: any) {
    for (var indexArray = 0; indexArray < this.cartDataList.length; indexArray++) {
      if (this.cartDataList[indexArray].foodProductID == cartItemData.foodProductID) {
        this.cartDataList[indexArray].quantity = parseInt(cartItemData.quantity) + 1;
      }
    }
    localStorage.setItem("ProductCartData", JSON.stringify(this.cartDataList));
    this.allCartPrice();
    this.cartItemFunc();
  }

  // Subtracting the Product Quantity or change or Edit the Quantity
  subtractingProductQuantity(cartItemData: any) {
    for (var indexArray = 0; indexArray < this.cartDataList.length; indexArray++) {
      if (this.cartDataList[indexArray].foodProductID == cartItemData.foodProductID) {
        this.cartDataList[indexArray].quantity = parseInt(cartItemData.quantity) - 1;
      }
    }
    localStorage.setItem("ProductCartData", JSON.stringify(this.cartDataList));
    this.allCartPrice();
    this.cartItemFunc();

  }

  // Remove Item from Cart
  RemoveItemFromCart(foodProductID: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to Delete the item from Cart?',
      accept: () => {
        let gettingData = JSON.parse(localStorage.getItem("ProductCartData")!);
        if (localStorage.getItem("ProductCartData")) {
          this.cartDataList = gettingData;
          const findingIdInCartArray = this.cartDataList.findIndex(a => a.foodProductID == foodProductID);
          this.cartDataList.splice(findingIdInCartArray, 1);
          localStorage.setItem("ProductCartData", JSON.stringify(this.cartDataList)); //when Data is deleted then again or replace or set that ArrayList all data in the LocalStorage
          this.allCartPrice();
        }
        if (this.cartDataList.length == 0) {
          this.showCheckOutButton = false;
          localStorage.removeItem("ProductCartData");
          this._shoppingCartService.cartItemsNumber.next(0);
        } else {
          this.cartItemFunc();
        }
      }
    });

  }

  // This will get the
  showModelDialogOfCheckOut() {
    this.displayModal = true;
  }



  // user addrress:
  userAddress = true;






  sendOrderWithCustomerAddress(formData: NgForm) {
    let customizeObj = {}

    let gettingData = JSON.parse(localStorage.getItem("ProductCartData")!);

    let sendingOrderArr = [];

    for (var singleProductOrder of gettingData) {
      customizeObj = {
        fullName: formData.value.fullName,
        fullAddress: formData.value.fullAddress,
        phoneNumber: formData.value.phoneNumber,
        foodProductId: singleProductOrder.foodProductID,
        quantity: singleProductOrder.quantity,
        totalPrice: singleProductOrder.price * singleProductOrder.quantity,
        orderStatus: 'Pending'
      };
      sendingOrderArr.push(customizeObj);
      customizeObj = {};
    }


    this._shoppingCartService.Insert(sendingOrderArr).subscribe((dataResponse: any) => {
      // when data is send to the server which is array then in response write all below code
      localStorage.removeItem("ProductCartData");
      this._shoppingCartService.cartItemsNumber.next(0);
      this.showAddress = false;
      this.orderMessage = "your order has been confirm and it will reached to your address in 30 minutes"
      console.log(sendingOrderArr);
      // only this above
    })

    setTimeout(() => {
      if (localStorage.getItem("ProductCartData") == null) {
        this.showCheckOutButton = false;
        this.cartDataList = [];
        this.totalPrice = 0;
      } else {
        this.showAddress = true;
      }
    }, 1000)

  }

  removeMessage() {
    this.orderMessage = null;
  }

}
