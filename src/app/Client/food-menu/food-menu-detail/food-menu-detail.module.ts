import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodMenuDetailRoutingModule } from './food-menu-detail-routing.module';
import { FoodMenuDetailComponent } from './food-menu-detail.component';
import { HeaderModule } from '../../Header/header.module';
import { FooterModule } from '../../footer/footer.module';

@NgModule({
  declarations: [FoodMenuDetailComponent],
  imports: [
    CommonModule,
    FoodMenuDetailRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class FoodMenuDetailModule { }
