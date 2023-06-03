import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home',
    loadChildren: () => import('./components/home-page/home-page.module')
      .then(m => m.HomePageModule)
  },
  { 
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  }, 
  { 
    path: '**',
    loadChildren: () => import('./components/not-found-page/not-found-page.module')
      .then(m => m.NotFoundPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
