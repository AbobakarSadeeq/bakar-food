import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../admin.component';
import { AdminHeaderComponent } from './admin-header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AdminHeaderComponent],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports:[AdminHeaderComponent]
})
export class AdminHeaderModule { }
