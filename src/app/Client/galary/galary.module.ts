import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalaryRoutingModule } from './galary-routing.module';
import { GalaryComponent } from './galary.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../Header/header.module';


@NgModule({
  declarations: [GalaryComponent],
  imports: [
    CommonModule,
    GalaryRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class GalaryModule { }
