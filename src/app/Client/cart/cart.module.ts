import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../Header/header.module';
import { ConfirmationService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    FooterModule,
    HeaderModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[ConfirmationService]
})
export class CartModule { }
