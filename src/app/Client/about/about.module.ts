import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../Header/header.module';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class AboutModule { }
