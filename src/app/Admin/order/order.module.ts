import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { AdminHeaderModule } from '../admin-header/admin-header.module';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    AdminHeaderModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
  providers:[ConfirmationService]
})
export class OrderModule { }
