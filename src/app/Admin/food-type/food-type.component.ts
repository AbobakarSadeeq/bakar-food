import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { FoodTypeService } from './food-type.service';
import {ConfirmationService} from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-food-type',
  templateUrl: './food-type.component.html',
  styleUrls: ['./food-type.component.css']
})
export class FoodTypeComponent implements OnInit {
  subscription:Subscription;
  FoodTypeList:any[] = [];
  displayAddCategoryModel = false;
  foodTypeFormData:FormGroup;


  constructor(
    private _foodTypeService:FoodTypeService,
    private _cofirmationService:ConfirmationService,
    private _fb:FormBuilder
  ) { }

  ngOnInit(): void {

    this.getListFoodType();

    this.foodTypeFormData = this._fb.group({
      foodTypeName:['',[Validators.required]]
    });
  }

  getListFoodType(){
    this.subscription = this._foodTypeService.GetAll().subscribe((dataResponse:any)=>{
      this.FoodTypeList = dataResponse;
    })
  }


  showAddFoodTypeModel() {
    this.displayAddCategoryModel = true;
  }

  onSaveFoodType(){
    console.log(this.foodTypeFormData.value['foodTypeName']);
    let convertData = {
      foodTypeName:this.foodTypeFormData.value['foodTypeName']
    }
    this._foodTypeService.Insert(convertData).subscribe((data:any)=>{
      this.getListFoodType();
      this.displayAddCategoryModel = false;
      this.foodTypeFormData.reset();
    })
  }

  removeErrorMessage(){

  }

  onDeleteFoodType(Id:number) {
    this._cofirmationService.confirm({
        message: 'Are you sure that you want to Delete food type?',
        accept: () => {
          this._foodTypeService.DeleteData(Id).subscribe((dataResponse:any)=>{
            this.getListFoodType();
          })
        }
    });
}



  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}
