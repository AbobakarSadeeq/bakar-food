import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodProductComponent } from './food-product.component';

const routes: Routes = [
  {path:'', component:FoodProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodProductRoutingModule { }
