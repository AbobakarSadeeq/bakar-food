import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { FoodTypeService } from '../food-type/food-type.service';
import { FoodProductService } from './food-product.service';

@Component({
  selector: 'app-food-product',
  templateUrl: './food-product.component.html',
  styleUrls: ['./food-product.component.css']
})
export class FoodProductComponent implements OnInit {
  subscription:Subscription;
  FoodProductList:any [] = [];
  foodTypeList:any[]=[];
  displayAddFoodProductModel = false;
  foodProductFormData:FormGroup;

  constructor(
    private _foodProductService:FoodProductService,
    private _foodProductTypeService:FoodTypeService,

    private _cofirmationService:ConfirmationService,
    private _fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.getListFoodProductList();

    this.foodProductFormData = this._fb.group({
      foodProductName:['',[Validators.required]],
      foodProductDescription:['',[Validators.required]],
      price:['',[Validators.required]],
      foodTypeId:[null, [Validators.required]],

    });
  }

  getListFoodProductList(){
    this.subscription = this._foodProductService.GetAll().subscribe((data:any)=>{
      this.FoodProductList = data;
    });

  }

  selectedFile: any = null;
  fileChange(myEvent: any) {
    this.selectedFile = <File>myEvent?.target?.files[0];
}

@ViewChild('inputFile') myInputVariable: ElementRef;
  onSaveFoodProduct(){
    const formForm = new FormData();
    formForm.append("File", this.selectedFile, this.selectedFile?.name);
    formForm.append("foodProductName", this.foodProductFormData.value['foodProductName'] );
    formForm.append("foodProductDescription", this.foodProductFormData.value['foodProductDescription'] );
    formForm.append("price", this.foodProductFormData.value['price'] );
    formForm.append("foodTypeId", this.foodProductFormData.value['foodTypeId'] );

    this._foodProductService.Insert(formForm).subscribe((dataResponse:any)=>{
      this.getListFoodProductList();
      this.foodProductFormData.reset();
      this.displayAddFoodProductModel = false;
      this.myInputVariable.nativeElement.value = '';
    })

  }

  showAddFoodProductModel(){
    this.displayAddFoodProductModel = true;
    this._foodProductTypeService.GetAll().subscribe((dataResponse:any)=>{
      this.foodTypeList = dataResponse;
    })
  }

  removeErrorMessage(){
    this.displayAddFoodProductModel = false;
  }

  onDeleteFoodProduct(Id:number){
    this._cofirmationService.confirm({
      message: 'Are you sure that you want to Delete food product?',
      accept: () => {
        this._foodProductService.DeleteData(Id).subscribe((dataResponse:any)=>{
          this.getListFoodProductList();
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
