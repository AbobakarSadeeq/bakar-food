import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../Header/header.component';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from '../footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderModule } from '../Header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    HeaderModule,
    FooterModule

  ]
})
export class HomeModule { }
