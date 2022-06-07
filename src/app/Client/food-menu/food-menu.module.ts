import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodMenuRoutingModule } from './food-menu-routing.module';
import { FoodMenuComponent } from './food-menu.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../Header/header.module';


@NgModule({
  declarations: [FoodMenuComponent],
  imports: [
    CommonModule,
    FoodMenuRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class FoodMenuModule { }
