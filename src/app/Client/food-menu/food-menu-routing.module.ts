import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodMenuComponent } from './food-menu.component';

const routes: Routes = [
  {path:'', component:FoodMenuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodMenuRoutingModule { }
