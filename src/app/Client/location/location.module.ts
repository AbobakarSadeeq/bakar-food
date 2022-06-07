import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { HeaderModule } from '../Header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [LocationComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class LocationModule { }
