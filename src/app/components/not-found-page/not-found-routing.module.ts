import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundBackgroundComponent } from './not-found-background/not-found-background.component';

const routes: Routes = [
  { path: '', component: NotFoundBackgroundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundPageRoutingModule { }
