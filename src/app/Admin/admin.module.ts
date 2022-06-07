import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminHeaderModule } from './admin-header/admin-header.module';
import { OrderComponent } from './order/order.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminHeaderModule
  ]
})
export class AdminModule { }
