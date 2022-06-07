import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodProductService } from 'src/app/Admin/food-product/food-product.service';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-food-menu-detail',
  templateUrl: './food-menu-detail.component.html',
  styleUrls: ['./food-menu-detail.component.css']
})
export class FoodMenuDetailComponent implements OnInit {

  singleFoodDetail: any;

  // Cart Data
  addQuantity = 1;
  itemsCart: any = [];


  constructor(
    private _foodProductService: FoodProductService,
    private _activateRoute: ActivatedRoute,
    private _shoppingCartService: CartService
  ) { }

  ngOnInit(): void {

    let fetchIdFromUrl = +this._activateRoute.snapshot.params['id'];

    this._foodProductService.get(fetchIdFromUrl).subscribe((dataResponse: any) => {
      this.singleFoodDetail = dataResponse;
      console.log(dataResponse);
    });

  }

  subtractingProductQuantity() {
    this.addQuantity--;
  }

  addingProductQuantity() {
    this.addQuantity++;
  }


  // Adding Product to cart


  cartNumberFunc() {
    var cartValue: [] = JSON.parse(localStorage.getItem('ProductCartData')!);
    let quantitySum: number = 0;
    for (var gettingQuantity of cartValue) {
      quantitySum = quantitySum + gettingQuantity['quantity'];
    }
    this._shoppingCartService.cartItemsNumber.next(quantitySum);

  }


  // Products Array


  addToCartProduct(productData: any) {
    let filteringDataOfProduct = {
      foodProductName: productData.foodProductName,
      foodProductDescription: productData.foodProductDescription,
      price: productData.price,
      quantity: this.addQuantity,
      foodTypeName: productData.foodTypeName,
      image: productData.image,
      foodProductID: productData.foodProductID,
    };


    let cartDataNull = localStorage.getItem("ProductCartData");
    if (cartDataNull == null) {
      let storeDataGet: any[] = [];
      storeDataGet.push(filteringDataOfProduct);
      localStorage.setItem("ProductCartData", JSON.stringify(storeDataGet));

    } else {
      let gettingIdOfProduct = filteringDataOfProduct.foodProductID;
      let index = -1;
      this.itemsCart = JSON.parse(localStorage.getItem("ProductCartData")!);
      for (let i = 0; i < this.itemsCart.length; i++) {
        if (parseInt(gettingIdOfProduct) === parseInt(this.itemsCart[i].foodProductID)) {
          this.itemsCart[i].quantity = filteringDataOfProduct.quantity;
          index = i;
          break;
        }
      }
      if (index == -1) {
        this.itemsCart.push(filteringDataOfProduct);
        localStorage.setItem("ProductCartData", JSON.stringify(this.itemsCart));

      }
      else {
        localStorage.setItem("ProductCartData", JSON.stringify(this.itemsCart));

      }
    }
    this.cartNumberFunc();

  }





}
