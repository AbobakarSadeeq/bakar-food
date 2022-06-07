import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodTypeComponent } from './food-type.component';

const routes: Routes = [
  {path:'', component:FoodTypeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodTypeRoutingModule { }
