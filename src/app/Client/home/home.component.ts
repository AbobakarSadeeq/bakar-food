import { Component, OnInit } from '@angular/core';
import { filter, take, takeLast } from 'rxjs';
import { FoodProductService } from 'src/app/Admin/food-product/food-product.service';
import { FoodMenuService } from '../food-menu/food-menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foodArr:any[] = [];

  constructor(private foodService:FoodProductService) { }

  ngOnInit(): void {

    this.foodService.GetAll().subscribe((data:any)=>{
      this.foodArr = data.slice(0,3);
    });

  }


}
