import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodTypeRoutingModule } from './food-type-routing.module';
import { FoodTypeComponent } from './food-type.component';
import { AdminHeaderModule } from '../admin-header/admin-header.module';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [FoodTypeComponent],
  imports: [

    CommonModule,
    FoodTypeRoutingModule,
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
export class FoodTypeModule { }
