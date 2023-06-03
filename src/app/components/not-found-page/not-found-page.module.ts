import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundBackgroundComponent } from './not-found-background/not-found-background.component';
import { NotFoundPageRoutingModule } from './not-found-routing.module';



@NgModule({
  declarations: [
    NotFoundBackgroundComponent
  ],
  imports: [
    CommonModule, 
    NotFoundPageRoutingModule
  ], 
  exports: [
    NotFoundBackgroundComponent
  ]
})
export class NotFoundPageModule { }
