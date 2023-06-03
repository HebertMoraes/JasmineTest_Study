import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBackgroundComponent } from './home-background/home-background.component';
import { HomePageRoutingModule } from './home-page-routing.module';



@NgModule({
  declarations: [
    HomeBackgroundComponent
  ],
  imports: [
    CommonModule, 
    HomePageRoutingModule
  ], 
  exports: [
    HomeBackgroundComponent
  ]
})
export class HomePageModule { }
