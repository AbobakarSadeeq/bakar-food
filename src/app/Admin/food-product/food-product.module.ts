import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodProductRoutingModule } from './food-product-routing.module';
import { AdminHeaderModule } from '../admin-header/admin-header.module';
import { FoodProductComponent } from './food-product.component';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FoodProductComponent],
  imports: [
    CommonModule,
    FoodProductRoutingModule,
    AdminHeaderModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    ReactiveFormsModule
  ],
  providers:[ConfirmationService]

})
export class FoodProductModule { }
