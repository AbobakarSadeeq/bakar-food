import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodMenuDetailComponent } from './food-menu-detail.component';

const routes: Routes = [
  {path:'', component:FoodMenuDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodMenuDetailRoutingModule { }
