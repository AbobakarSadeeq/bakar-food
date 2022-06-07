import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FoodProductService } from 'src/app/Admin/food-product/food-product.service';
import { FoodTypeService } from 'src/app/Admin/food-type/food-type.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
  foodsList: any[] = [];
  subscription: Subscription;

  constructor(
    private _foodProductService: FoodProductService,
    private _foodTypeService: FoodTypeService

  ) { }

  ngOnInit(): void {
    this.getFoodProductList();
  }

  getFoodProductList() {
    this.subscription = this._foodProductService.GetAll().subscribe((data: any) => {
      this.foodsList = data;
    });
    this.getFoodTypeList();
  }

  productTypeList: any[] = [];
  getFoodTypeList() {
    this.subscription = this._foodTypeService.GetAll().subscribe((data: any) => {
      this.productTypeList = data;
    })
  }


  filterdArr = true;
  filteredArrData: any[] = [];
  filterdFood(foodTypeSelectedId: any) {
    this.filterdArr = false;
    this.filteredArrData = [];
    let dataFoundedWithSelectedId = this.foodsList.filter(a => a.foodTypeId == foodTypeSelectedId);
    this.filteredArrData = dataFoundedWithSelectedId;

    if(dataFoundedWithSelectedId.length == 0){
      this.filterdArr = true;
    }

  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}
