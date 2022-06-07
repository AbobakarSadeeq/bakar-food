import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderDetailRoutingModule } from './order-detail-routing.module';
import { OrderDetailComponent } from './order-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { AdminHeaderModule } from '../../admin-header/admin-header.module';
import { ConfirmationService } from 'primeng/api';


@NgModule({
  declarations: [OrderDetailComponent],
  imports: [
    CommonModule,
    OrderDetailRoutingModule,
    AdminHeaderModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    ReactiveFormsModule,
  ],
  providers:[ConfirmationService]
})
export class OrderDetailModule { }
