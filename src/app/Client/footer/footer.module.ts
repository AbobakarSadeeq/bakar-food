import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule

  ],
  exports:[FooterComponent]
})
export class FooterModule { }
